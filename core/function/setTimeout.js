// setInterval 实现 setTimeout
function timeOut (fn, time) {
  let start = Date.now() + time
  let timer = setInterval(() => {
    if (Date.now() - start > time) {
      clearInterval(timer)
      fn()
    }
  }, time)
}

timeOut(() => {
  console.log(500)
}, 1000)


// setTimeout 实现 setInterval；这种递归调用缺点：不能清除定时器
function interVal (fn, time) {
  setTimeout(() => {
    fn() // 递归调用实现
    interVal(fn, time)
  }, time)
}

let i = 0
interVal(() => {
  i++
  console.log(i)
}, 1000)


// setTimeout 能清除定时器
class Timer {
  constructor() {
    this.id = null // 定时器的 ID
    this.fn = null // 需要被定时执行的函数
  }
  
  init (fn, ms) {
    if (!this.fn) this.fn = fn
    // 确保一个 Timer 实例只能重复一个 fun，如果不限制，只能清除掉最后添加进来的重复代码的定时器 ID
    if (this.fn !== fn) return
    // 要重复执行 b函数, 只能再实例化一个 Timer
    
    this.id = setTimeout(() => {
      fn()
      this.init(fn, ms) // 递归调用
    }, ms)
  }
  
  clear () {
    clearTimeout(this.id)
    // this.fn = null
  }
}

let j = 0
let timer = new Timer()
timer.init(() => {
  j++;
  console.log(j)
  if (j > 3) {
    console.log('clear', timer)
    timer.clear()
  }
}, 1000)


let id = null
function interVal2 (fn, time) {
  id = setTimeout(() => {
    fn() // 递归调用实现
    interVal2(fn, time)
  }, time)
  
  return id
}

let x = 0
// id 不断的变化，id2 是初始值
// let id2 =
interVal2(() => {
  x++;
  console.log(x, id)
  // if (x > 3) { // 清除定时器无效，要放到外面，清除不断变化的 id
  //   clearTimeout(id)
  // }
}, 1000)

if (x > 3) {
  clearTimeout(id)
}

