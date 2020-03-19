// bind 绑定 this指向；返回一个绑定后的函数；原理就是：高阶函数
// 如果绑定的函数被 new了，当前函数的 this就是当前的 实例
let obj = {
  name: 'lucy',
  age: 20
}

function fn() {
  console.log(this.name)
}
// bind 绑定的方法并不会执行，返回的是绑定后的方法
let bindFn = fn.bind(obj)
bindFn() // 调用绑定后的方法会让原方法执行


// bind 实现
Function.prototype.bind = function (context, ...arg) {
  const fnBind = () => {
    // 绑定 this，让函数执行
    return this.apply(context)
  }
  
  // Reflect.setPrototypeOf()
}















