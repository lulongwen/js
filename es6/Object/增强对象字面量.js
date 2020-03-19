/**
 * 对象字面量被增强了，写法更加简洁与灵活，同时在定义对象的时候能够做的事情更多了
 *  可以在对象字面量里面定义原型
 *  定义方法可以不用function关键字
 *  直接调用父类方法
 */

/**
 * 箭头函数中返回对象字面量, 细节 箭头函数在参数和箭头之间不能换行
 * ES6中用 params => {object: literal} 这种简单的语法返回对象字面量是行不通的
 * 要用圆括号把对象字面量包起来
 */

var func = () => ({foo: 1})



var person = {
  eat() {
    return 'like eating'
  }
}

var work = {
  __proto__: person,
  company: 'very rich',
  work() {
    return 'I\'m working busy'
  }
}

person.eat() // "like eating"

// 调用继承的 eat 方法
work.eat() // "like eating"




/**
 *  属性简洁语法
 */

var x = 1; var y = 2;

var obj = {x, y}
// 属性名是x，变量名也是x, 两者一致，可以简写



// 方法属性定义：ES5的时候，把一个函数赋值给属性的时候，函数必须是一个完整的函数定义
var obj = {
  fn: function() {
    return 'es 2013'
  }
}


// ES6中，可以把:function 这一部分去掉了，写法如下
var obj = {
  fn() {
    return 'es 2016'
  }
}

/**
 * 细节 
 * 只有给属性赋值的是匿名函数的时候，才可以使用简洁语法，
 * 如果赋值的是一个 有名字的函数，那么就不能使用匿名函数了
 * 
 * 最常见的一种用法是递归，自己调用自己，如果没有名字，怎么调用
 *  还有就是程序debugger 的时候，有函数名字可以直接定位
 */

var obj = {
  fn: function myFn() {
    return 'es 2016'
  }
}



/**
 * 计算属性名
 *  对象字面量中可以存在动态生成的属性
 *  把动态属性用 [] 包括起来
 *  这样在程序运行的时候可以对[] 中的内容进行计算
 * 
 * 
 * 对重复属性名的处理
 *  在ES5 的时候，如果给一个对象赋值为相同的属性，它就会报错
 *  ES6 下，不会报错了，取最后一个相同属性的值
 */

var obj = {
  name: 'lucy',
  name: 'ok',
  ['first' + 'name']: 'lucy'
}
obj['firstname'] // lucy
obj['first' + 'name'] // lucy


// 对象的属性包含空格，不能使用 . 要用 [ ]
obj['hot drink'] = 'mylike'
// obj.hot drink // 报错
obj['hot drink'] // "mylike"



var obj = {
  name: 'Sam',
  name: 'Jason'
}
obj.name // Jason


// 变量名当做属性名
var name = 'ojasdf';
var obj = {
  'name': 'lucy'
}

var obj2 = {
  [name]: '变量名当做属性名'
}

console.log(obj.name); // "lucy"

console.log(obj2[name]); // "变量名当做属性名"