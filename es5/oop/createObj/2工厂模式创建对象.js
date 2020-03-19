/**
 * 共同点：都是函数，都可以创建对象，都可以传入参数
 *
 * 工厂模式：函数名都是小写
 * 	有 new，new 之后的对象是当前的对象
 * 	有返回值
 * 	直接调用函数就可以创建对象
 * 	
 * 	自定义构造函数
 * 		函数名是大写（首字母)
 * 		没有new，通过new的方式来创建对象
 * 		没有返回值
 * 		this是当前的对象
 */

// 工厂模式
function createObj(name, age) {
	var obj = new Object()
	obj.name = name
	obj.age = age
	obj.eating = function() {
		console.log('hello money')
	}

	// 工厂模式，必须要 return
	return obj
}

var p1 = createObj('lucy', 20)



// 自定义构造函数
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