/**
Generator函数 异步编程解决方案
 生成器是一个函数，可以用来生成迭代器，生成器函数和普通函数不一样
  普通函数一旦调用，一定会执行完
  生成器函数中间可以暂停，可以执行一会，歇息一会 yield
 
 生成器函数的特点，函数名前 要加个 *，生成器有若干个阶段，如何划分这个阶段呢
 定义 迭代器函数的方式
 function* test(){}
 function * test(){}
 function *test(){}
 
 test = function* (){}
 test = function *(){}
 
 函数能被迭代要求有一个迭代器函数，函数必须返回一个带有next方法的对象

 
  生成器的本质是 迭代器，迭代器总会有一个 next方法
 
## 什么是异步
* 异步，简单说就是一个任务分成两段
* 先执行第一段，然后转而执行其他任务
* 等做好了准备，再回过头执行第二段

* **异步编程方式**
	1 回调函数
	2 事件监听
	3 发布/订阅
	4 Promise对象

* 回调函数，就是把第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数
 */

function* go (a) {
  console.log(1)
  // 此处的 b 用来让外界输入进来的
  // 这一行实现输入和输出，本次的输出放在 yield后面，下次的输入放在 yield前面
  let b = yield a
  
  console.log(2)
  
  let c = yield b
  console.log(3)
  
  return c
}

// 生成器函数和普通的函数不一样，调用生成器函数，并不会立即执行
// 会返回这个生成器的迭代器， 迭代器是一个对象，每调用一次 next 就可以返回一个值 对象
let it = go('a value')

// next() 第一次执行不需要参数，传参数没有意义
let r1 = it.next()

// 第一次调用 next会返回一个对象，对象有2个属性
// value 就是  yield 后面的那个值， done 表示是否迭代完成
console.log(r1) // { value: 'a value', done: false }

let r2 = it.next('ok value')
console.log(r2) // { value: 'ok value', done: false }

let r3 = it.next('cc value')
console.log(r3) // { value: 'cc value', done: true }



function *food() {
  yield 'rice'
  yield 'mango'
  yield 'pear'
}

var good = food()
good.next()  // {value: "rice", done: false}
good.next()  // {value: "mango", done: false}
good.next()  // {value: "pear", done: false}
good.next()  // {value: undefined, done: true}





function *fruit(arg) {
  console.log(arg)
  for(let i=0; i<arg.length; i++) {
    yield arg[i]
  }
}
var juice = fruit(['peach', 'pear', 'lemon'])
juice.next() // {value: "peach", done: false}
juice.next() // {value: "pear", done: false}
juice.next() // {value: "lemon", done: false}
juice.next() // {value: undefined, done: true}
juice.next() // {value: undefined, done: true}


// 实现一个 迭代器函数
function iterators(arg) {
  let i = 0
  return {
    next() {
      // 是否迭代完成
      let done = (i >= arg.length) ? true : false
      // 迭代出的结果
      let value = !done ? arg[i++] : undefined
      return {
        value, done
      }
    }
  }
}
var eat = iterators(['rice', 'mango', 'pear'])
eat.next() // {value: "rice", done: false}
eat.next() // {value: "rice", done: false}
eat.next() // {value: "pear", done: false}

eat.next() // {value: undefined, done: true}
eat.next() // {value: undefined, done: true}
