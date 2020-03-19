// * yield 产出
function* fn() {
  yield 100
  yield 200
}

let it = fn()

// 返回的是一个迭代器 需要自己去迭代; 迭代器是一个对象 对象上有一个next方法 调用后会返回 {value,done}
console.log(it.next())
console.log(it.next())
console.log(it.next())
