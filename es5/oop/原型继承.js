var Person = function(name) {
	this.name = name
}

Person.prototype.say = function() {
	console.log('say name',this.name)
}

var Child = function(name) {
	Person.apply(this, arguments)
}

// 原型继承
var F = function() {}
F.prototype = Person.prototype

Child.prototype = new F()
Child.prototype.write = function() {
	console.log('child write')
}

var lucy = new Child('Lucy')
lucy.say()

var p1 = new Person('Apple')
console.log(p1.write)


class Child extends Person {
	constructor(name) {
		super(name)
	}
}