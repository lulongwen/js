function Person (name) {
  this.name = name
  
  // 如果当前构造函数返回的是 [], {} function，直接返回这个对象
  // return {name: 'lucy'}
}

Person.prototype.say = function () {
  console.log('hello')
}

// new 实现
function _new () {
  let constructor = [].shift.call(arguments)
  console.log(constructor, 'ok')
  let obj = {}
  // 原型上的方法
  obj.__poro__ = constructor.prototype
  
  // 判断返回的是不是 [], {} function
  let result = constructor.apply(obj, arguments)
  return (result instanceof Object) ? result : obj
}

let p = _new(Person, 'lucy')
console.log(p)
