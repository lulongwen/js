/*
  Promise 是一个构造函数，new Promise的实例有：then, catch 等方法
  1. Promise的 3个状态：pending, fulfilled, rejected
    pending 等待状态，默认
    fulfilled 成功态，fulfilled 不能切换到 rejected
    rejected 失败态
  
  2. executor 函数会立即执行，resolve, reject 也是个函数
    resolve() 将 promise状态改变为 fulfilled 成功态，成功的回调
    reject() 将 promise状态改变为 rejected 失败态，失败的回调
    
  3. 每个 promise 上都有一个 then方法，then方法中传递2个函数，
      分别代表成功和失败执行的回调函数
  4. 一旦成功，就不能失败；一旦失败，就不能成功
  
  then的特点：
  promise中的then方法，无论是成功还是失败，返回结果是一个普通值时，就会把这个结果传递给外层的then的下一个then的成功回调
  
  内部抛错就会走外层的then的下一个then的失败回调，如果下一个then没有错误处理 会继续向下找，如果找不到就报错
  
  如果成功或者失败的回调的返回值 返回是一个promise 那么会让这个promise执行 采用他的状态
  
  如果 promise then 方法的成功回调，或失败回调执行后，返回的是一个 promise会让这个 promise执行，会调用 then方法
  
  promise 每次返回的都必须是一个新的 promise，因为 promise只能成功或失败，新的 promise才可以重新成功或失败
  
  promise 实现链式调用 靠的是返回一个新的promise,因为promise的状态 一旦确定 不能重新更改
  */

// 判断是不是 promise
const isPromise = value => {
  if ((typeof value === 'object' && value !== null) || typeof value === 'function') {
    if (value.then && typeof value.then === 'function') return true
  }
  return false
}

// 2 Promise then 的实现
function Promise (executor) { // executor 默认同步执行
  const self = this
  this.status = 'pending'
  this.value = null
  this.reason = null
  
  // 依赖的是：发布订阅模式，将成功和失败依次存放到数组中；等待用户改变状态，依次调用绑定的事件
  this.onFulfilledCallbacks = [] // 专门存放成功状态的回调
  this.onRejectedCallbacks = [] // 专门存放失败状态的回调
  
  // 1 调用了 resolve 标识当前 promise成功了，当前状态就变成了成功态
  function resolve (value) {
    if(value instanceof self){
      // 如果resolve的值是一个promise，就让这个promise执行，把成功的结果再次判断
      return value.then(resolve,reject)
    }
    
    // value 成功有成功的值，失败有失败的原因
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
        fn && fn()
      })
    }
  }
  
  // try catch 捕获异常错误
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e) // 如果发生错误，直接失败态
  }
}


function resolvePromise(promise2, x, resolve, reject) {
  // x是不是promise，如果自己等待自己，直接变成失败状态
  // 规范里规定了一段代码，这个代码可以实现我们的promise和别人的promise可以进行交互
  if (promise2 === x) {
    return reject(new TypeError('循环引用'))
  }
  
  // 1 x是对象或者函数
  if (x !== null && typeof x === 'object' || typeof x === 'function') {
    let called // 防止成功后调用失败
    try {
      let then = x.then // 防止取then是出现异常
      // then是一个普通对象，不是函数，就直接成功即可
      if (typeof then !== 'function') return resolve(x)
      
      // 如果当前是 promise就让这个 promise执行
      then.call(x, function(y) {
        if (called) return // 防止 promise 即调用又调用失败
        called = true
        // resolve(y) // 成功传递给成功，下面防止无限返回 promise
        // 如果 y是promise 就继续递归解析promise
        resolvePromise(promise2, y, resolve, reject)
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
  else resolve(x)
}

// then 为了实现链式调用，默认返回一个新的 promise，只有新的 promise才有成功和失败态
Promise.prototype.then = function(onFulfilled, onRejected) {
  // Promise.resolve 可选参数配置
  onFulfilled = (typeof onFulfilled === 'function') ? onFulfilled : function (data) { return data }
  onRejected = (typeof onRejected === 'function') ? onRejected : function (err) { throw err }
  
  // 当前调用 then方法成功后，再返回一个新的 promise, new Promise会立即执行
  let promise2 = new Promise((resolve, reject) => {

    // 如果当前状态成功，就调用成功方法，否则调用失败方法
    if (this.status === 'fulfilled') {
      // 当前上下文中 promise2 = undefined，不能在当前上下文中执行
      // setTimeout 为了保证promise2 已经产生了
      setTimeout(() => {
        try {
          // 如果 value 是promise 就采用当前 promise的状态
          let x = onFulfilled(this.value)
          // 判断 x 和 promise2 的关系；x 是普通值，promise2 成功；非普通值 promise2 失败
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
  
  return promise2
}

// catch是then的一个别名而已，失败态
Promise.prototype.catch = function (errorCallback) {
 return this.then(null, errorCallback)
}

Promise.prototype.finally = function (callback) {
  return this.then(data => {
    callback() // 复杂些，需要考虑异步
    return data
  }, error => {
    callback()
    return error
  })
}

// 类上的方法
Promise.resolve = function (value) {
  return new Promise((resolve) => {
    resolve(value)
  })
}

Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value)
  })
}

Promise.race = function (array) {
  return new Promise((resolve, reject) => {
    array.forEach(item => {
      // 判断是不是 promise
      if (typeof item === 'object' && item.then && typeof item.then === 'function') {
        item.then(resolve, reject)
      }
      else resolve(item)
    })
  })
}

Promise.all = function (array) {
  return new Promise((resolve, reject) => {
    let [proxy, i] = [[], 0]
    
    array.forEach((item, i) => {
      // 判断当前的是不是 promise，不是直接返回
      if (typeof item === 'object' && item.then && typeof item.then === 'function') {
        item.then(data => { loop(i, data) }, reject)
      }
      // 不是 promise 直接返回当前项
      else { loop(i, item) }
    }, reject)
  
    // 为了实现key和值对应上 需要构建数组依次往里面放
    function loop (index, data) {
      proxy[index] = data
      if (++i === array.length) {
        resolve(proxy)
      }
    }
  })
}

Promise.try = function (callback) {
  // return Promise.resolve(callback()); // 不可以，因为先执行cb()，一旦异常，无法捕获
  return new Promise((resolve, reject) => {
    resolve(callback())
  })
}


// Deferred 延迟，这个方法是 promise的语法糖
// yarn add promises-aplus-tests promiseA+ 测试库
Promise.deferred = Promise.defer = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}


module.exports = Promise
