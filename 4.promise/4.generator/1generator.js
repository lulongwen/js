/**
 * es6 提供的 generator 是生成器，生成的迭代器
 * [Symbol.iterator] 后面的函数就叫 迭代器函数 iterator
 *  迭代器函数会返回一个 对象 iterator
 */

const obj = {
  0: 1,
  1: 2,
  length: 2,
  [Symbol.iterator]: function() {
    let index = 0
    let self = this
    return {
      // 对象中必须要返回一个 next方法
      next() {
        return {
          value: 1, // value 代表的是值
          done: index++ === self.length // done 代表 是否完成迭代
        }
      }
    }
  }
}

var arr = [...obj] // 展开 obj


function read(arr) {
  var index = 0
  return {
    next() {
      return {
        value: arr[index],
        done: index++ >= arr.length
      }
    }
  }
}

var it = read(arr)
it.next() // {value: 1, done: false}
it.next() // {value: 1, done: false}
it.next() // {value: undefined, done: true}
it.next() // {value: undefined, done: true}


var it2 = read(['react', 'vue', 'es6', 'ts'])
it2.next() // {value: "react", done: false}
it2.next() // {value: "vue", done: false}
it2.next() // {value: "es6", done: false}
it2.next() // {value: "ts", done: false}

it2.next() // {value: undefined, done: true}


/**
 * * 和 yield 一起使用， yield产出
 * 可以暂停，调用next才会继续走
 */
function* gen() {
  let a = yield '去买菜' // a的结果是买回来的菜
  let b = yield a // b的结果是做好的菜
  return b // 返回做好的菜
}

var action = gen('做什么') // 执行后返回的是迭代器

// 第一次调用next传递的参数没有任何意义,下一次next传递的参数 是上次yield的返回值
// 会结合promise来写点功能
action.next() // {value: "去买菜", done: false}
action.next('buy fruit') // {value: "buy fruit", done: false}
action.next('buy flower') // {value: "buy flower", done: true}

action.next('drink water') // {value: undefined, done: true}

