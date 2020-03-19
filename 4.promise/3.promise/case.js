const fs = require('fs')
// const path = require('path')
const Promise = require('./Promise.js')

// 封装异步读取方法
function readFile (path) {
  return new Promise((resolve, reject) => {
    // throw new Error('errored') // error 自动 reject
    resolve(123)
    // fs.readFile(path, (err, data) => {
    //   // 不需要return 因为 promise 只能返回一种状态
    //   if (err) reject(err)
    //   resolve(data)
    // })
  })
}

/*
then的特点：
    1 promise then 方法的成功回调，或失败回调执行后，返回的是一个 promise 会让这个 promise执行，会调用 then方法
    2 只有成功或失败回调有返回值，不管是什么值，都会走外层的 then的成功回调
    3 返回的 promise失败了，会走失败；如果抛出异常，会走失败
    4 就近原则：先找最近的 error捕获，找不到，就向下找捕获
* */


let p = readFile()
p.then(data => {
  // throw new Error() // 防止跑错，要 try catch
  return 900
})


// 实现 Promise.try
Promise.try(() => {
  throw new Error('error')
}).then(data => {
  console.log('data', data)
}, err => {
  console.log('err', err)
})

// 中断 promise链，直接返回一个空的 promise 什么都不要做
Promise.resolve('ok').then(data => {
  return new Promise(() => {}) // return 空的 Promise
}).then(res => {
  console.log(200)
})


// abort 终止 promise执行
function wrap (p1) {
  let fail = null
  let p2 = new Promise((resolve, reject) => {
    fail = reject
  })
  let p = Promise.race([p1, p2])
  p.abort = fail
  return p
}

let p = wrap(new Promise((resolve, reject) => {
  setTimeout(() => { resolve('ok') }, 500)
}))

p.abort('error')
p.then(data => {
  console.log('data', data)
}).catch(err => console.log('err', err))


console.log('last')


