const fs = require("fs")
const { resolve } = require("path")

// 封装异步读取方法
function readFileAsync (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      // 不需要return 因为 promise 只能返回一种状态
      if (err) reject(err)
      resolve(data)
    })
  })
}

// 充分利用 then 方法
let file = readFileAsync(resolve(__dirname, '../data/cart.json'))
file.then(res => {
  let data  = JSON.parse(res)
  console.log('data', data)
}).catch(err => {
  console.log('err', err)
})
