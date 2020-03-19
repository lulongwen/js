const fs = require('fs')
function readFile (url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}


co(read()).then(data => {
  console.log('co data', data)
})
  .catch(err => console.log(err))

// co, express & koa 中间件的原理
function co (it) {
  return new Promise((resolve, reject) => {
    function next (data) {
      // 递归执行，直到结束
      let { value, done } = it.next(data)
      if (done) {
        return resolve(value)
      }
      // value可能不是 promise，用 Promise.resolve(value), 有一个失败就失败
      Promise.resolve(value).then(data => next(data), reject)
    }
    
    next()
  })
}


// co 优化方法 async
// generator + co -> async + await
async function read () {
  let data = await readFile('./name.txt', 'utf8')
  console.log('data', data)
}

read().then(data => {
  console.log(data)
})
  .catch(err => console.log(err))
