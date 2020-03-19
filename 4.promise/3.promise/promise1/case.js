const Promise = require('./Promise.js')

const p = new Promise((resolve, reject) => {
  // 但是内部代码是异步的，就无法捕获错误了，需要给 每个then中的方法都加一个 try catch
  console.log(300)
  resolve('有钱了')
})


// then方法可以不传参数，值的穿透
p.then(res => { // onFulfilled
  console.log('res', res)
}, err => { // onRejected
  console.log('err', err)
})

console.log('last')
