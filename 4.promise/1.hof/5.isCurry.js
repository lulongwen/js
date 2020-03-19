// currying 柯里化 isType
const currying = (fn, arr = []) => {
  let {length} = fn
  return (...arg) => {
    arr = [...arr, ...arg]
    if (arr.length < length) return currying(fn, arr)
    
    return fn(...arr)
  }
}

const checkType = (type, value) => Object.prototype.toString.call(value) === `[object ${type}]`

const util = {}
const types = ['Number', 'String', 'Boolean', 'Function', 'Array', 'Object', 'Null', 'Undefined', 'Symbol']

types.forEach(type => {
  // 先找类型 type，在找值，返回一个传值的函数
  // 柯里化的函数是分步执行的，第一次调用返回的是一个函数，第二次调用的时候才会进行计算
  util[`is${type}`] = currying(checkType)(type)
})
console.log(util.isString(123))
console.log(util.isArray([]))
