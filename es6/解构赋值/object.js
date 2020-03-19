/**
  变量量的解构赋值, 只能⽤用于数组 Array 或 对象 Object
  对象的属性没有次序，变量量必须与属性同名，才能取到正确的值
  对象的解构赋值也可以指定默认值: let { name = 'lucy'}={}
 */

 //  如果将⼀个已经声明的变量进行解构赋值必须这样写
 let x;
  ({x}={x:1})


// 如果要给变量量名起别名, 就是变量量名和属性名不一致
// : 是别名，重命名，= 就是赋值，
// sex 就是变量别名
let {gender:sex, address='ok'}={gender: 'man'}


let { length } = 'lucya'
// 5 return lucya.length



// 解构变量
let [ a, b, c, d ] = 'lucya'
// a l
// b u
// c c
// d y



// 解构 Object
let obj = {
  a: '孟子',
  b: '荀卿',
  c: '即墨',
  say() {
    return 'singsong'
  }
}

// 剩余运算符，必须在最后面
let {a, b, c, say} = obj
let {a, ...obj2} = obj
// a 1
// b 2
// c '即墨'
// say() 'singsong'
// obj2 剩下的对象


let a;
({a, b} = obj)
// a '孟子'
// b '荀卿'



// : 别名 alias
let {a: A, b } = obj;
// a 1  A  1
// b 2

// 默认值
let {a=1, b=2} = {a: 10};
// a 的默认值是 1，解构出来的值是 10
// b 2

let {a:A=1, b=2} = {a: 10};
// a undefined 报错
// A 10
// b 2




// 解构 ajax 参数
let res = {
  status: 200,
  id: 12,
  data: [
    {name: 'Lucy'},
    {name: 'Tomima'}
  ]
};
let { status, id, data } = res




// 深度嵌套结构赋值
let obj = {
  row: {
    thead: {
      age: 120,
      name: 'lucy'
    },
    tbody: ['tbody']
  }
}

let {row: {thead, tbody} } = obj
console.log(row)   // 报错， row is not defined
console.log(thead) // {age: 120, name: "lucy"}
console.log(tbody) // ["tbody"]

let {row: {thead, tbody:[first]} } = obj
  tbody // ["tbody"]
  first // 'tbody'

let {row: {thead:{age, name}, tbody:[first]} } = obj
  row   // 报错， row is not defined
  thead // {age: 120, name: "lucy"}
  tbody // ["tbody"]
  age   // 120
  name  // 'lucy'
  first // 'tbody'
