// promisify 方法 promise化
function promisify (fn) {
  return function (...arg) {
    return new Promise ((resolve, reject) => {
      arg.push((err, data) => {
        if (err) reject(err)
        resolve(data)
      })
      
      fn.apply(null, arg)
    })
  }
}

let fs = require('fs')
let read = promisify(fs.readFile)

read('name.txt', 'utf8').then(res => {
  console.log('data', data)
})
