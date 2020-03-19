function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.say = function () {
  console.log('person say')
}

let p1 = new Person('lucy', 20)
let p2 = new Person('ok', 900)

function Child (study) {
  // this 指向当前的实例
  this.study = study
  
  // 让父类在子类中执行，并且 this指向子类
  Person.call(this)
}

// 继承1 只继承父类实例上的属性，不继承父类原型上的属性，公共属性
// Person.call(this)


// 继承2 prototype 继承公有和静态方法
// Child.prototype.__proto__ = Parent.prototype
Object.setPrototypeOf(Child.prototype, Parent.prototype)

// 错误的继承：公用同一个，指向的都是同一个空间
// Child.prototype = Parent.prototype


// 继承3 Object.create 继承；缺点：constructor 指向父级
// constructor 构造函数才有，对象没有这个属性
Child.prototype = Object.create(Parent.prototype, {
  constructor: {value: Child}
})

function extend (child, parent) {
  child.__proto__ = parent
  child.prototype = Object.create(parent.prototype, {
    constructor: {value: child}
  })
}


// 不推荐的用法，缺点：不能在初始化父类的时候传参
Child.prototype = new Parent()
