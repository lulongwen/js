class Person {
  constructor (age) {
    this.age = age
    this.type = 'person'
  }
  
  say () {
    console.log(`${this.type} is old ${this.age}`)
  }
  
  static eat () {
    console.log('eat something')
  }
}

// extends 继承实例上的属性和 prototype
class Child extends Person {
  // 写了 constructor 就必须写 super
  constructor(age, learn) {
    super(age)
    this.learn = learn
  }
}

let p1 = new Child(20, 'english')
p1.say()
console.log(p1)
