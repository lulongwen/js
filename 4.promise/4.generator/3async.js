/**
 * async 返回的结果是一个 promise
 * await 后面只能跟着 promise
 * 
 * async & await 是 generator的语法糖
 * 
 * 多次请求并发处理，采用 Promise.all()
 * 
 * 异步的解决方案
 * callback-> promise -> generator -> async & await
 */

const {promisify} = require('bluebird')
const fs = require('fs')
let read = promisify(fs.readFile)


async function it() {
  let arr = [read('a.txt', 'utf8'), read('b.txt', 'utf8')]
  let b = await Promise.all(arr)

  return b
}

it().then(res => {
  console.log('data', res)
})