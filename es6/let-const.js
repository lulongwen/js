// 作用域内 函数声明会按照 var来解析

console.log('a', a) // undefined
{
  // var a = function () {} 相当于
  
  function a() {}
}
console.log('a', a) // undefined


var a = 100
let b = 200

console.log(window.a) // 100
console.log(window.b) // undefined
