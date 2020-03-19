/*
  Promise的 3个状态：
    pending 等待状态，默认
    fulfilled 成功态
    rejected 失败态
  
  executor 函数会立即执行，resolve, reject 也是个函数
  每个 promise 上都有一个 then方法，
    then方法中传递2个函数，分别代表成功和失败执行的回调函数，一旦成功，就不能失败；一旦失败，就不能成功
  
  then的特点：
    1 如果 promise then 方法的成功回调，或失败回调执行后，返回的是一个 promise
    会让这个 promise执行，会调用 then方法
    
    2 promise 每次返回的都必须是一个新的 promise
  */

// 实现 Promise A+ 规范
const [PENDING, FULFILLED, REJECTED] = ['PENDING', 'FULFILLED', 'REJECTED']

class Promise {
  constructor (executor) {
    if(typeof executor !== 'function'){
      throw new TypeError(`Promise resolver ${executor} is not a function`)
    }
    
    this.value = null // 成功的值
    this.reason = null // 失败的原因
    this.status = PENDING  // promise默认状态
  
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    
    const resolve = value => {
      // 如果成功，就不能失败
      if (this.status !== PENDING) return
      this.status = FULFILLED
      this.value = value
      
      // 执行异步代码
      this.onResolvedCallbacks.forEach(fn => { fn() })
    }
    
    const reject = reason => {
      if (this.status !== PENDING) return
      this.reason = reason
      this.status = REJECTED
      
      this.onRejectedCallbacks.forEach(fn => { fn() })
    }
    
    try {
      // executor 就是一个函数 提供给用户两个参数 ，用户可以选择执行成功还是失败
      executor(resolve, reject)
    } catch (e) {
      // 如果执行的时候出错 直接走到失败态
      reject(e)
    }
  }
  
  then (onResolved, onRejected) {
    // Promise.resolve & Promise.reject
    onResolved = (typeof onResolved === 'function') ? onResolved : x => x
    onRejected = (typeof onRejected === 'function') ? onRejected : r => { throw r }
    
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 当前上下文中 promise2 = undefined，不能在当前上下文中执行
        setTimeout(() => {
          try {
            let x = onResolved(this.value)
            // resolvePromise 解析x和 promise2之间的关系
            resolvePromise(promise2, x, resolve, reject)
          }catch (e) {
            reject(e)
          }
        }, 0)
      }
      
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          }catch (e) {
            reject(e)
          }
        }, 0)
      }
      
      // 如果即不成功，又不失败，就是有异步代码; 上面是处理同步逻辑的，下面是异步逻辑
      if (this.status === PENDING) {
        // 如果当前的状态是 pending的时候 就把成功的回调和失败的回调分开存放
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onResolved(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            }catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    
    return promise2
  }
  
  catch (callback) {
    // catch就是 then的没有成功的简写，接收的参数只用错误
    return this.then(null, callback)
  }
  
  static resolve (value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  }
  
  static reject (reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  
  // finally 也是 then的一个别名 不管成功还是失败都会执行
  // 如果返回的是一个promise，那需要等待这个promise执行完后才调用后续逻辑
  
  // promises-aplus-tests
  static deferred () {
    const dfd = {}
    dfd.promise = new Promise((resolve, reject) => {
      dfd.resolve = resolve
      dfd.reject = reject
    })
    // 检测这个对象上的promise属性 resolve方法 reject方法
    return dfd
  }
}

function resolvePromise (promise2, x, resolve, reject) {
  // 如果返回自己，报错循环引用
  if (promise2 === x) {
    throw new TypeError('Chaining cycle detected for promise #<Promise>')
  }
  
  // 如果 x是普通值，直接返回
  if ( x == null || typeof x !== 'object' || typeof x !== 'function') resolve(x)
  
  // 如果 x是promise 递归解析
  let called // 如果调用了失败 就不能再调用成功 调用成功也不能再调用失败
  try {
    let then = x.then
    // 如果 x是普通值，直接返回
    if (typeof then !== 'function') resolve(x)
    
    then.call(x, y => {
      if (called) return
      called = true
      // 返回值y 有可能解析出来的还是一个promise，递归解析一直到普通值
      resolvePromise(promise2, y, resolve, reject)
    }, r => {
      if (called) return
      called = true
      reject(r)
    })
  
  } catch(e) {
    if (called) return
    called = true
    reject(e)
  }
}

module.exports = Promise
