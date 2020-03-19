// 2 Promise then 的实现
function Promise (executor) { // executor 默认同步执行
  const self = this
  this.status = 'pending'
  this.value = null
  this.reason = null
  
  // 依赖的是：发布订阅模式，将成功和失败依次存放到数组中；等待用户改变状态，依次调用绑定的事件
  this.onResolvedCallbacks = [] // 专门存放成功状态的回调
  this.onRejectedCallbacks = [] // 专门存放失败状态的回调
  
  // 1 调用了 resolve 标识当前 promise成功了，当前状态就变成了成功态
  function resolve (value) {
    // value 成功有成功的值，失败有失败的原因
    if (self.status === 'pending') {
      self.status = 'fulfilled'
      self.value = value
    }
    
    self.onResolvedCallbacks.forEach(fn => {
      fn && fn()
    })
  }
  
  // 2 调用了 reject，当前状态就变成了失败态
  function reject (reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.reason = reason
    }
    
    // 失败的回调
    self.onRejectedCallbacks.forEach(fn => {
      fn && fn()
    })
  }
  
  // try catch 捕获异常错误
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e) // 如果发生错误，直接失败态
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 如果自己等待自己，直接变成失败状态
  if (promise2 === x) {
    return reject(new TypeError('循环引用'))
  }
  
  let called
  
  // 1 判断 x 是不是一个 promise
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then // 获取 then方法防止发生异常
      // 如果不是 promise
      if (!(typeof then === 'function')) resolve(x)
  
      // 如果当前是 promise就让这个 promise执行
      then.call(x, function(y) {
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

// then 为了实现链式调用，默认返回一个新的 promise，只有新的 promise才有成功和失败态
Promise.prototype.then = function(onFulfilled, onRejected) {
  // p.then().then().then()
  onFulfilled = (typeof onFulfilled === 'function') ? onFulfilled : function (data) { return data }
  onRejected = (typeof onRejected === 'function') ? onRejected : function (err) { throw err }
  
  // 当前调用 then方法成功后，再返回一个新的 promise, new Promise会立即执行
  let promise2 = new Promise((resolve, reject) => {

    // 如果当前状态成功，就调用成功方法，否则调用失败方法
    if (this.status === 'fulfilled') {
      // 当前上下文中 promise2 = undefined，不能在当前上下文中执行
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
      // this.onResolvedCallbacks.push(Onfulfilled) 直接 push，参数丢失
      this.onResolvedCallbacks.push(() => {
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
