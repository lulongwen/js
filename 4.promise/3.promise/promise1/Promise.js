/*
  Promise 是一个构造函数，自己身上有all、reject、resolve 方法
  Promise的 3个状态：
    1. pending 等待状态，默认
    2. fulfilled 成功态
    3. rejected 失败态
  
  executor 函数会立即执行，resolve, reject 也是个函数
    每个 promise 上都有一个 then方法，then方法中传递2个函数，
      分别代表成功和失败执行的回调函数
    一旦成功，就不能失败；一旦失败，就不能成功
  */

// 1 Promise 同步代码实现
function Promise (executor) {
  if(typeof executor !== 'function'){
    throw new TypeError(`Promise resolver ${executor} is not a function`)
  }
  
  this.status = 'pending'
  this.value = null
  this.reason = null
  const self = this
  
  function resolve (value) {
    // 成功有成功的值 value，调用了 resolve，当前状态就变成了成功态
    if (self.status === 'pending') {
      self.status = 'fulfilled'
      self.value = value
    }
  }
  
  function reject (reason) {
    // 失败有失败的原因 reason，调用了 reject，当前状态就变成了失败态
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.reason = reason
    }
  }
  
  try {
    // executor 就是一个函数 提供给用户两个参数 ，用户可以选择执行成功还是失败
    executor(resolve, reject)
  } catch (e) {
    // 如果执行的时候出错 直接走到失败态
    reject(e)
  }
  // executor(resolve, reject)
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  // 如果当前状态成功，就调用成功方法，否则调用失败方法
  if (this.status === 'fulfilled') {
    onFulfilled(this.value)
  }
  
  if (this.status === 'rejected') {
    onRejected(this.reason)
  }
}

module.exports = Promise
