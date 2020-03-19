const resolvePromise = require('./resolvePromise')

// 3 Promise.then 的实现
function Promise (executor) { // executor 默认同步执行
  this.status = 'pending'
  this.value = null
  this.reason = null
  const self = this
  
  // 依赖的是：发布订阅模式，将成功和失败依次存放到数组中；等待用户改变状态，依次调用绑定的事件
  this.onResolvedCallbacks = [] // 专门存放成功状态的回调
  this.onRejectedCallbacks = [] // 专门存放失败状态的回调
  
  // 1 调用了 resolve 标识当前 promise成功了，当前状态就变成了成功态
  function resolve (value) {
    // value 成功有成功的值，失败有失败的原因
    if (self.status === 'pending') {
      self.status = 'fulfilled'
      self.value = value
      
      self.onResolvedCallbacks.forEach(fn => {
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
  
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e) // 如果发生错误，直接失败态
  }
}

// then 链式调用，返回新的 promise，只有新的 promise才有成功和失败态
Promise.prototype.then = function(onResolved, onRejected) {
  // p.then().then().then()
  onResolved = (typeof onResolved === 'function') ? onResolved : function (data) { return data }
  onRejected = (typeof onRejected === 'function') ? onRejected : function (err) { throw err }
  
  // 当前调用 then方法成功后，再返回一个新的 promise, new Promise会立即执行
  let promise2 = new Promise((resolve, reject) => {

    // 如果当前状态成功，就调用成功方法，否则调用失败方法
    if (this.status === 'fulfilled') {
      // 当前上下文中 promise2 = undefined，不能在当前上下文中执行
      setTimeout(() => {
        try {
          // 如果 value 是promise 就采用当前 promise的状态
          let x = onResolved(this.value)
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
  
    // 如果状态时 pending 说明有异步逻辑，上面是处理同步逻辑的，下面是异步逻辑
    if (this.status === 'pending') {
      // this.onResolvedCallbacks.push(onResolved) 直接 push，参数丢失
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
          } catch (e) {
            reject(e)
          }
        }, 0)
      })
    }
  })
  
  return promise2
}

// catch
Promise.prototype.catch = function (errorCallback) {
 return this.then(null, errorCallback)
}

Promise.prototype.finally = function (callback) {
  return this.then(data => {
    callback() // 复杂些需要考虑异步
    return data
  }, error => {
    callback()
    return error
  })
}

// 类上的方法
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value)
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
