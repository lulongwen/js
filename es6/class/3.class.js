class Food {
  constructor(eat) { // constructor 私有属性，实例上的属性
    this.eat = eat
    this.lunch = []
  }

  fruit() {
    return 'watermoon'
  }

  // get 获取
  get drink() {
    return this.lunch
  }

  // set 设置
  set drink(sweet) {
    this.lunch.push(sweet)
  }

  // 静态方法，不用实例化，直接调用
  static mylike(like) {
    return `wo xihuan chi ${like}`
  }
}

// 静态属性原型上的属性
Food.name = 'very delicious'

Food.prototype.watch = function() {
  return 'watch tv'
}

let apple = new Food('apple')
apple.fruit()

Food.mylike('西瓜')



// extends 继承实例的属性和公共属性
class Fruit extends Food { // Food.call(...arg)
  constructor(eat, drink) {
    // 如果你写了 constructor，就必须写 super 调用父类的；super 类似于 Food.call(this)
    super(eat, drink)
  }
}

// 父级的静态方法也会被继承
let lunch = new Fruit('rice', 'watermelon')

// es5 只继承公有方法
function create(ParentProto) {
  function Fn() {}
  Fn.prototype = ParentProto
  return new Fn()
}

// es6 实现继承公有方法
Fruit.prototype = Object.create(Parent.prototype, {
  constructor: {value: Fruit}
})

let f2 = new Fruit()


// 只继承私有属性
