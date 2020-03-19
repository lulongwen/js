/**
 * 自定义构造函数创建对象，做的事情
 * 1 内存中开辟一个空间存储对象
 * 2 把 this 设置为当前的对象
 * 3 设置属性和方法的值
 * 4 把 this 对象返回
 */

function Person(name, age, sex) {
	this.name = name
	this.age = age
	this.sex = sex
	this.play = function() {
		console.log('来个羽毛球')
	}
}

// 创建对象 -> 实例化一个对象的同时，对属性进行初始化
var person = new Person('lucy', 18, 'girl')

// true
console.log('person', person instanceof Person)
console.log('name', person.name)
