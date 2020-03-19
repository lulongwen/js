const fs = require("fs")
let arr = []

// 有2个接口，并发请求数据，fs.readFile 异步请求，无法 try catch
fs.readFile("../data/age.txt", "utf8", (err, data) => {
  arr.push(data)
})

fs.readFile("../data/name.txt", "utf8", (err, data) => {
  arr.push(data)
})

console.log("arr", arr) // [] 异步代码还没有执行


// 并发问题解决，计数器
function after (times, fn) {
  let queue = []
  return function (data) {
    queue.push(data)
    if (--times === 0) {
      fn && fn(queue) // fn 回调函数
    }
  }
}

let fn = after(2, data => {
  console.log('after', data)
})

fs.readFile("../data/age.txt", "utf8", (err, data) => {
  fn(data)
})

fs.readFile("../data/name.txt", "utf8", (err, data) => {
  fn(data)
})
