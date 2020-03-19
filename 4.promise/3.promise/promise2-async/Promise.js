/*
  Promise 是一个构造函数，自己身上有all、reject、resolve 方法
  1. Promise的 3个状态：
    1. pending 等待状态，默认
    2. fulfilled 成功态
    3. rejected 失败态
  
  2. executor 函数会立即执行，resolve, reject 也是个函数
  3. 每个 promise 上都有一个 then方法，then方法中传递2个函数，
      分别代表成功和失败执行的回调函数
  4. 一旦成功，就不能失败；一旦失败，就不能成功
  */

// 2 Promise 异步代码实现
function Promise (executor) {
  const self = this
  this.status = 'pending'
  this.value = null
  this.reason = null
  
  // 依赖的是：发布订阅模式，将成功和失败依次存放到数组中；等待用户改变状态，依次调用绑定的事件
  this.onResolvedCallbacks = [] // 专门存放成功状态的回调
  this.onRejectedCallbacks = [] // 专门存放失败状态的回调
  
  // 调用了 resolve，当前状态就变成了成功态
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
  
  function reject (reason) {
    // 调用了 reject，当前状态就变成了失败态
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.reason = reason
  
      // 失败的回调
      self.onRejectedCallbacks.forEach(fn => {
        fn && fn()
      })
    }
  }
  
  // executor 执行的时候 加上 try catch 捕获异常错误
  // 但是内部代码是异步的，就无法捕获错误了，需要给每个then中的方法都加一个 try catch
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  // 如果当前状态成功，就调用成功方法，否则调用失败方法
  if (this.status === 'fulfilled') {
    onResolved(this.value)
  }
  if (this.status === 'rejected') {
    onRejected(this.reason)
  }
  
  // 如果状态时 pending 说明有异步逻辑，没有调用 resolve 或 reject
  if (this.status === 'pending') {
    // this.onResolvedCallbacks.push(onResolved) 直接 push，参数丢失
    this.onResolvedCallbacks.push(() => {
      onResolved(this.value)
    })
    
    this.onRejectedCallbacks.push(() => {
      onRejected(this.reason)
    })
  }
}

module.exports = Promise
