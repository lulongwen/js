// 反柯里化，不是我的方法，转化之后可以使用
const un_currying = fn => (...arg) => fn.call(...arg)

let type = un_currying(Object.prototype.toString)
console.log(type(123))


Function.prototype.un_currying = function () {
  return (...arg) => {
    return this.call(...arg)
  }
}

Function.prototype.un_currying = function () {
  const _ = this
  return function () {
    return _.call(...arguments)
  }
}

let checkType = Object.prototype.toString.un_currying()
console.log(checkType(true))


let push = Array.prototype.push.un_currying()
let obj2 = {}
push(obj2, 'vue', 'react')


let obj = {
  "length": 1,
  "0" : 'a'
}
push(obj, 'ok')
