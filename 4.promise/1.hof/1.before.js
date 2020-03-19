// 将核心的逻辑提取出来，在外面添加功能
// AOP 面向切片编程

Function.prototype.before = function (callback) {
  // 箭头函数中没有 this指向和 arguments，所以会向上级作用域查找
  return (...arg) => {
    callback && callback()
    this(...arg)
  }
}

// ... 剩余运算符，将所有参数合并成一个数组
const say = (...arg) => {
  console.log('saying-----', ...arg) // ... 展开运算符
}

const newSay = say.before(() => {
  console.log('hello')
})

const newSay2 = say.before(() => {
  console.log('life is good')
})

newSay(123)
newSay2()
