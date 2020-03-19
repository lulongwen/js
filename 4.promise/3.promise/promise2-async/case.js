const Promise = require('./Promise.js')

const p = new Promise((resolve, reject) => {
  console.log(300)
  setTimeout(() => {
    resolve('有钱了')
  }, 1000)
})

// 一个 promise 实例，可以 then多次，发布订阅模式
p.then(res => {
  console.log('res', res)
}, err => { // onRejected
  console.log('err', err)
})

p.then(res => { // onFulfilled
  console.log('res2', res)
}, err => { // onRejected
  console.log('err2', err)
})

console.log('last')
