// 实现 Array.prototype.reduce

Array.prototype._reduce = function (callback, memo) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback is not a function at Array.reduce')
  }
  
  // 首先判断 上一个参数存在不存在
  // memo 不存在，第一次循环，memo是第一个值，next是第二个值
  let i = 0
  if (memo == null) {
    memo = this[0]
    i = 1
  }

  const {length} = this
  while (i < length) {
    memo = callback(memo, this[i], i, this)
    i++
  }
  
  return memo
}

const arr = [1,2,3,4,5]
arr._reduce((memo, current, i , self) => {
  // console.log(memo, current)
  return memo + current
})
