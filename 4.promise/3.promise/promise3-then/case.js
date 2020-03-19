const fs = require('fs')
const path = require('path')
const Promise = require('./Promise.js')

// 封装异步读取方法,，现一个deffererd方法
function readFile (path) {
  // return new Promise((resolve, reject) => {
  //   fs.readFile(path, (err, data) => {
  //     // 不需要return 因为 promise 只能返回一种状态
  //     if (err) reject(err)
  //     resolve(data)
  //   })
  // })
  
  const defer = Promise.defer()
  fs.readFile(path, 'utf8',(err, data) => {
    if (err) defer.reject(err)
    defer.resolve(data)
  })
  
  return defer.promise  // 返回 promise让外部调用
}

/*
then的特点：
    1 promise then 方法的成功回调，或失败回调执行后，返回的是一个 promise 会让这个 promise执行，会调用 then方法
    2 只有成功或失败回调有返回值，不管是什么值，都会走外层的 then的成功回调
    3 返回的 promise失败了，会走失败；如果抛出异常，会走失败
    4 就近原则：先找最近的 error捕获，找不到，就向下找捕获
* */

let dirname = path.resolve(__dirname, '../data/name.txt')
console.log('dirname', dirname)

readFile(dirname).then(data => {
  let dir = path.resolve(__dirname, '../data/'+data)
  return readFile(dir)
})
  .then(value => {
    // console.log('value', value)
    throw new Error('抛出异常')
  })
  .then()  // then方法可以不传参数，值的穿透到 catch
  .catch(err => {
    console.log('err', err)
    return 600
  })
  .then(num => {
    // catch 之后还可以再 then
    console.log('num', num)
  })


console.log('last')

// Promise.resolve
let p = new Promise((resolve, reject) => {
  resolve(3000)
})

// let p2.then(() => {
//   return p2 // promise2 永远不会完成，循环引用
// })

let p2 = p.then(function(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve 返回值是个 promise
      resolve(new Promise((resolve, reject) => {
        resolve(new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('deep 202020')
          }, 0)
        }))
      }))
    }, 1000)
  })
})




