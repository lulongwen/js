// 高阶函数包含 柯里化，bind可以保留参数；柯里化 将一个函数拆分为多个函数

function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

const checkType = (type) => {
  return (value) => {
    return Object.prototype.toString.call(value) === `[object ${type}]`
  }
}

const isString = checkType('String')
// isNumber()
console.log(isString('123'))

const util = {}
const types = ['Number', 'String', 'Boolean', 'Function', 'Array', 'Object', 'Date', 'RegExp', 'Null', 'Undefined', 'Symbol']

types.forEach(type => {
  util[`is${type}`] = checkType(type)
})
console.log(util)
console.log(util.isArray({}))
