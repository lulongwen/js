/* 实现 Promise A+ 规范
  Promise 是一个构造函数，自己身上有all、reject、resolve 方法
  1. Promise的 3个状态：
    1. pending 等待状态，默认
    2. fulfilled 成功态
    3. rejected 失败态
  
  2. executor 函数会立即执行，resolve, reject 也是个函数
  3. 每个 promise 上都有一个 then方法，then方法中传递2个函数，
      分别代表成功和失败执行的回调函数
  4. 一旦成功，就不能失败；一旦失败，就不能成功
  
  then的特点：
    1 如果 promise then 方法的成功回调，或失败回调执行后，返回的是一个 promise
    会让这个 promise执行，会调用 then方法
    
    2 promise 每次返回的都必须是一个新的 promise
  */


class Promise {
  // executor 默认同步执行
  constructor(executor) {
    const self = this
    this.status = 'pending'
    this.value = null
    this.reason = null
    
    // 依赖的是：发布订阅模式，将成功和失败依次存放到数组中；等待用户改变状态，依次调用绑定的事件
    this.onFulfilledCallbacks = [] // 成功状态的回调
    this.onRejectedCallbacks = [] // 失败状态的回调
    
    // 1 调用了 resolve 标识当前 promise成功了，当前状态就变成了成功态
    function resolve (value) {
      if (self.status === 'pending') {
        self.status = 'fulfilled'
        self.value = value
        self.onFulfilledCallbacks.forEach(fn => {
          fn && fn()
        })
      }
    }
    
    // 2 调用了 reject，当前状态就变成了失败态
    function reject (reason) {
      if (self.status === 'pending') {
        self.status = 'rejected'
        self.reason = reason
        self.onRejectedCallbacks.forEach(fn => {
          fn && fn() // 失败的回调
        })
      }
    }
    
    try {
      // try catch 捕获执行时可能出现的异常错误
      executor(resolve, reject)
    } catch (e) {
      reject(e) // 如果发生错误，直接失败态
    }
  }
  
  then (onFulfilled, onRejected) {
    // p.then().then()
    onFulfilled = (typeof onFulfilled === 'function') ? onFulfilled : function (data) {
      return data
    }
    onRejected = (typeof onRejected === 'function') ? onRejected : function (err) {
      throw err
    }
    
    // 当前调用 then方法成功后，再返回一个新的 promise, new Promise会立即执行
    let promise2 = new Promise((resolve, reject) => {
      
      // 如果当前状态成功，就调用成功方法，否则调用失败方法
      if (this.status === 'fulfilled') {
        // 当前上下文中 promise2 = undefined，不能在当前上下文中执行
        setTimeout(() => {
          try {
            // 如果 value 是promise 就采用当前 promise的状态
            let x = onFulfilled(this.value)
            // resolvePromise可以解析x和promise2之间的关系，x 是普通值，promise2 成功
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            // 防止 throw new Error 异常错误，还要判断 value 是不是 promise
            reject(e)
          }
        }, 0)
      }
      
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      
      // 如果状态时 pending 说明有异步逻辑，没有调用 resolve 或 reject
      if (this.status === 'pending') {
        // this.onFulfilledCallbacks.push(Onfulfilled) 直接 push，参数丢失
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
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
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
  
    // 调用then后返回一个新的promise实现链式调用，只有新的 promise才有成功和失败态
    return promise2
  }
  
  catch (onRejected) {
    // catch就是 then的没有成功的简写，接收的参数只用错误
    return this.then(null, onRejected)
  }
}


function resolvePromise(promise2, x, resolve, reject) {
  // 如果自己等待自己，直接变成失败状态
  if (promise2 === x) {
    return reject(new TypeError('循环引用'))
  }
  
  // 1 判断 x 是不是一个 promise
  if (x !== null && typeof x === 'object' || typeof x === 'function') {
    let called
    try {
      let then = x.then // 获取 then方法防止发生异常
      // 如果不是 promise
      if (!(typeof then === 'function')) resolve(x)
      
      // 如果当前是 promise就让这个 promise执行
      then.call(x, function (y) {
        if (called) return // 防止 promise 即调用又调用失败
        called = true
        // resolve(y) // 成功传递给成功
        resolvePromise(promise2, y, resolve, reject) // 防止无限返回 promise，递归解析
      }, function (r) {
        if (called) return
        called = true
        reject(r) // 失败传递给失败
      })
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  }
  
  // 如果 x是个普通值，直接 resolve
  resolve(x)
}

Promise.resolve = function (value) {
  return new Promise((resolve) => resolve(value))
}

Promise.reject = function (value) {
  return new Promise((resolve, reject) => reject(value))
}

Promise.race = function (promise2) {
  return new Promise((resolve, reject) => {
    promise2.forEach(item => {
      item.then(resolve, reject)
    })
  })
}

Promise.all = function (promise2) {
  return new Promise((resolve, reject) => {
    let [arr, i] = [[], 0]
    
    promise2.forEach((item, index) => {
      item.then(data => loop(index, data), reject)
    })
    
    function loop (index, data) {
      arr[index] = data
      i++;
      if (i === promise2.length) {
        resolve(arr)
      }
    }
  })
}

// Deferred 延迟，这个方法是 promise的语法糖
Promise.deferred = Promise.defer = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}

module.exports = Promise
