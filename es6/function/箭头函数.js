/**
 * arrow function
 * 箭头函数 写起来简单，可以解决  this问题
 * 高阶函数
 *  箭头函数没有 function 的关键字
 *  小括号和大括号之间有个箭头
 *  如果参数是一个，可以省略小括号
 *  如果没有 return， 可以不写 大括号
 *  如果直接返回 对象类型，要用 () 包裹
 */

// 普通函数
function fn(a) { return a }

// 箭头函数
var fn = a => a;


var fn = (drink, eat) => drink+eat
// 等价于
var fn = function(drink, eat) {
  return drink + eat
}
// fn('water', 'cake')



function fn(c) {
  return function(d) {
    return {sum: c + d}
  }
}

var fn = c => d => ({sum: c + d})
fn(1)(2)


function middleWare(store) {
  return function (dispatch) {
    return function (action) { }
  }
}
var middleWare = store => dispatch => action => {}



/**
 * 箭头函数解决 this 问题
 *  解决 this 问题
 *  var that = this
 *  通过 bind 方式绑定 this, call, apply
 *  箭头函数， 箭头函数中没有 this 指向
 */


// 对象不是作用域，let 声明的变量，不会被声明到全局上
var title = 'lucy'
let obj = {
  b: 1,
  a: () => {
    setTimeout(() => {
      // this Window
      console.log('this', this)
    }, 1000)
  },
  text: () => {
    // this window
    console.log('b', this.title);
    
  }
}

obj.a() // Window
obj.text() //  'lucy'



/**
 * 箭头函数中没有 arguments
 * ... 剩余运算符，就是把多余的都放到数组里面
 */

var fn = (...arguments) => {
  let args = arguments.slice(1)
  console.log(arguments, args)
}
fn('x', 1,2,3,4,5,6)
// [1,2,3,4,5,6]


// 函数可以赋予默认参数
var fn = (a=1, b=2) => {
  console.log(a,b)
}
fn();


// 箭头函数，和父级作用域共用 this
const arrow = function (param) {}
const arrow = (param) => {}
const arrow = (param1, param2) => { }
const arrow = param => {}

// 返回一个对象
const arrow = param => ({})
const arrow = params => ({param: param})
const arrow = param => console.log(param)

// 结构赋值
const arrwo = ({id, name}) => {
  console.log('id,name', id, name)
}
const arrwo = ({id, name}) => ({id, name})
