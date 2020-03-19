/**
 * 可以给参数设置默认值
 * 
 * rest参数 rest 把参数组合成的是一个数组  函数定义的时候用 ...name
 * 
 * 扩张运算符 
 *  将一个数组转化为 用逗号分隔的参数序列 函数调用的时候用
 *  ...[1,2,3,4,5,6]
 * 
 * 箭头函数 var func = () =>{}
 *  this指向，箭头函数里面的 this指向他上层作用域
 *    箭头函数里面的this 在定义的那一刻就确定了
 *  箭头函数 不可以当做构造函数  
 */


// 函数声明，函数名字就是函数名
function food(arguments) {
  return 'food'
}

// 匿名函数，函数名字就是变量名字
var food = function() {}


// 函数声明的优先级 高于变量
var food = function fn() {}





// 多出的参数全部放在 arr, 一般用在函数的参数里面，让参数无限多
function food(eat, drink, ...arr) {
  // rice 
  // water 
  // ["pear", "orange", "mango"]
  // pear orange mango
  console.log(eat, drink, arr, ...arr)
}
food('rice', 'water', 'pear', 'orange', 'mango')




// 把传进来的参数组合成一个数组
function fn(...name) {
  name.push(2000)
  for(let i=0; i<name.length; i++) {
    console.log(name, name[i])
  }
}
fn('osdf') // ["osdf", 2000]

// [1, 2, 3, 4, 5, 6, 7, {…}, "hwb", 2000]
fn(1,2,3,4,5,6,7,{name:'hwb'},'hwb')
fn(...[1,2,3,4,5,6,7,{name:'hwb'},'hwb'])



// 最大值
Math.max.apply(null, [1,3,4,5,6])

Math.max(...[1,3,4,5,6])

Math.max(1,3,4,5,6)




// 求和， 默认参数
var add = (x=20, y=30) => {
  return x + y
}
console.log(add(200, 300)); // 500

