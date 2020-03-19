const fs = require("fs")

// 发布订阅，中介租房；获取异步请求数据 redux
// 中介者，发布订阅 和观察者模式不一样，
function Event () {
  this.queue = []
}

// 我 捕获租房信息
Event.prototype.on = function (fn) {
  this.queue.push(fn)
}

// 房主 发布信息
Event.prototype.emit = function (data) {
  this.queue.forEach(fn => {
    fn(data) // 把参数传入回调函数里面
  })
}

let ev = new Event()
let arr = []

ev.on(data => {
  arr.push(data)
  if (arr.length === 2) {
    console.log('on', arr)
  }
})


// 有2个接口，并发请求数据，fs.readFile 异步请求，无法 try catch
fs.readFile("../data/age.txt", "utf8", (err, data) => {
  ev.emit(data)
})

fs.readFile("../data/name.txt", "utf8", (err, data) => {
  ev.emit(data)
})
