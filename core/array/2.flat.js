// 数组扁平化
Array.prototype._flat = function () {
  return this.reduce((memo, current) => {
    // 如果是数组，递归调用
    return Array.isArray(current) ? memo.concat(current._flat()) : [...memo, current]
  }, [])
}


Array.prototype._flat = function (flag) {
  return this.reduce((memo, current) => {
    // 如果是数组，递归调用
    return Array.isArray(current)
      ? flag ? [...memo, ...current._flat()] : [...memo, ...current]
      : [...memo, current]
  }, [])
}

let arr = [1, 2, [3, 4, ['abc', {a: 1, b: 2}]]]
arr._flat()
