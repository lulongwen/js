/**
new 一个构造函数发生了四件事情
 1 创建了一个空对象 var obj = {}
 2 this 指向 这个空对象
 3 执行代码
 4 隐式返回这个对象 obj
 */
function Person(name, age) {
  this.name = name
  this.age = age
}

let p1 = new Person('lucy', 20)
let p2 = new Person('ok', 900)

console.log(Person.__proto__ === Function.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true

console.log(Object.prototype.__proto__) // null

// constructor 构造函数的实例
// __proto__ 原型，对象的
// prototype 原型链，函数的

// 类的原型和实例的原型链是相等的
console.log(Person.prototype === p1.__proto__) // true
console.log(p1.constructor === Person) // true
