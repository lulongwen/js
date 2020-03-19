/**
解构赋值，声明和赋值都放在一起
  解构：表示 符号左边和右边解构类型
  解构数组，必须位置相同
 
 变量量的解构赋值, 只能⽤用于数组 Array 或 对象 Object
 
解构赋值的概念
  按照一定的模式，从数组和对象中提取值，对变量进行赋值，这就被称为解构(Destructuring)
 
...rest参数
  把多余的值放到一个数组里面，主要用于获取多余的参数，数组的取值
  var [...myRest] = [1,2,3, 'ok'] 最终出来的是个数组
 
...扩展运算符
 将⼀个数组转换为用逗号分割的参数序列，该运算主要⽤用于函数调用
  数组的赋值
  var ary = [1,2];
  var spread=[12, ...ary, 34] 最终出来是逗号分割的参数序列，这是不属于解构赋值
 
 
  数组的解构赋值可以指定默认值
  var [age=18,name="zf"] = []
  
  如果解构不不成功，变量的值就等于undefined;
  var [foo] = []
 
  对 null或者 undefined解构就会报错
  var [foo] = undefined;
 */

var [...my] = [1,2,3, 'ok']
console.log(my)


// ES6 数组 解构赋值, 命名变量的技巧
var [a, b, c] = ['haha', 'lala', 'gogo'];
// a 'haha'
// b 'lala'
// c 'gogo'

function test() {
  return [1, 2, 3]
}
let [a, b, c] = test()
// a 1
// b 2


// 对象解构时名字必须相同
var {length} = ['ok', 123]
// length 2  [].length


// 如果有关键字，可以采用 : 的形式进行更改名字
var {name, age, default:d} = {name: 'lucy', age: 12, default: 'so goods'}
// name 'lucy'
// age 12
// d 'so goods'


var [a, [b, c] ] = ['haha', ['lala', 'gogo'] ]
// a 'haha'
// b 'lala'
// c 'gogo'


// 解构需要的
var [a, , c] = ['haha', 'lala', 'gogo']
// a 'haha'
// c 'gogo'


// 展开运算符
var [a, ...c] = [1, 2, 3]
// a  1
// c  [2, 3]


// 解构变量默认值， 如果想设置某个属性的默认值，必须用 = 的方式
var [a, b, c='给的值', d='lala'] = [1, 2, 3];
// a 1
// b 2
// c 3
// d 'lala'


// 默认值
var [a=1, b=2] = [];
// a 1
// b 2

// 跳过第一个
var [{name}, { address: [a, ...b] }, hobby = '游泳'] = [
  { name: 'goods' },
  { age: 9, address: [1, 2, 3] },
]
// name 'goods'
// address 报错， address is not defined
// a 1
// b [2, 3]


var [, { address: [, a], age }, hobby = '游泳'] = [
  { name: 'zfpx' },
  { age: 9, address: [1, 2, 3] },
]
// age 9
// a 2
// address 报错，address is not defined
// hobby '游泳'



// 解构赋值 ajax 应用
function ajax({ url = new Error('url not found'), type = 'get', data = {} }) {
  console.log(url, type, data);
}

ajax({
  url: '/api/list',
  data: {}
})
