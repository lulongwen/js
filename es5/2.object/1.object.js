// 声明对象的方法
var obj = {}

var obj = new Object()

var Person = function({title, age}) {
  this.title = title
  this.age = age
  this.say = function() {
    return this.title + this.age
  }
}

Person.prototype.fn = function() {
  return 'hello'
}

var obj = new Person({title: 'good', age: 120})
  obj.like = 'eating'