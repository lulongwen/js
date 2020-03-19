// 统一处理 resolve 返回的结果
function resolvePromise (promise2, x, resolve, reject) {
  // 1如果自己等待自己，直接变成失败状态
  if (promise2 === x) {
    return reject(new TypeError('循环引用'))
  }
  
  // 2判断返回结果 x 是不是一个 promise
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    // 如果调用了失败 就不能再调用成功 调用成功也不能再调用失败
    let called
    try {
      let then = x.then // 获取 then方法防止发生异常
      // 返回结果x 是普通值，就直接返回
      if (typeof then !== 'function') resolve(x)
      
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

module.exports = resolvePromise
