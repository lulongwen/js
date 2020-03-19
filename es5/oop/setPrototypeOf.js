

// Object.prototype.toString.call([]) === '[object Array]'


// 继承方式
function Parent() {
  this.smoking = '抽烟'
}

Parent.prototype.sleep = '睡觉'

function Child() {

}

// 只继承公有
Object.setPrototypeOf(Child.prototype, Parent.prototype)

// 只继承公有方法； 间接继承，连接到父级上
Child.prototype.__proto__ = Parent.prototype


// 原生代码实现 create，继承公有属性
function create(proto) {
	// 创建一个空类，把传进来的原型，赋值给这个类
  let Fn = function() {}
  Fn.prototype = proto

  // 返回只拥有传进来的，公有属性的实例
  return new Fn()
}
Child.prototype = create(Parent.prototype)



// 继承私有 + 公有

let child = new Child()

// 只继承公有，必须先实例化 Child
Child.prototype = Object.create(Parent.prototype)

console.log('child.smoking', child.smoking)