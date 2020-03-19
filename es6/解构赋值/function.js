// 如果要给变量量名起别名, 就是变量量名和属性名不一致
// : 是别名，重命名，sex 就是变量别名，之前的名字不能用
// = 就是赋值， 默认值

let {gender:sex, address='ok'} = {gender: 'man'}

function food() {
  return {
    lunch: 'lunch',
    water: 'milk',
    fruit: 'apple'
  }
}

// 解构函数, 前面是对象属性，后面是自定义的变量名
let {lunch, water, fruit} = food()


// 解构 ajax 参数
let res = {
  status: 200,
  id: 12,
  data: [
    {name: 'Lucy'},
    {name: 'Tomima'}
  ]
}
let { status, id, data } = res


// 函数传参
let arr = [3, 6, 9]

fn(arr)
function fn([b, a]) {
  console.log(b, a)
  // a 3
  // b 6
}

const obj2 = {b: 88, a: 99}

fn2(obj2);
function fn2({a, b}) {
  console.log(a, b);
  // a 99
  // b 88
}


// 参数默认值， 参数没有设置 undefined
const obj3 = {b: 66}

fn3(obj3)
function fn3({a=25, b, c}) {
  console.log(a, b);
  // a 25
  // b 66
}


// 解构 默认函数
let { floor, round, pow, PI } = Math;
let num = 1.8;

floor(num);  // 1
round(num); // 2

let number = round(PI * num * 100) / 100
// 5.65
