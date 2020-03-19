// 1同步 promise
let p = new Promise((resolve, reject) => {
  resolve('有钱了')
  throw new Error('买包包')
})
p.then(res => { // resolve
  console.log('resolve', res)
}, err => { // reject
  console.log('fail', err)
})


// 2异步 promise
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('有钱了')
  }, 100)
})


// 3 多次调用 then方法；promise 实现链式调用 靠的是返回一个新的promise,因为promise的状态 一旦确定 不能重新更改
let p1 = p.then((data) => {
  console.log('success', data)
}, (err) => {
  console.log('fail', err)
})

let p2 = p.then((data) => {
  console.log('success', data)
}, (err) => {
  console.log('fail', err)
})

// 模拟 用promise 抛硬币
let point = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve()
      } else {
        reject()
      }
    }, Math.random() * 1000 * 10)
  })
}
point().then(() => {
  console.log('正')
}, () => {
  console.log('反')
})


// 3 then 返回的结果是个 promise
// 递归解析一直到普通值 resolvePromise(promise2, y, resolve, reject)
let p2 = readFile('./name.txt')
  .then((data)=>{
    // return readFile(data+'1')
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(new Promise((resolve,reject)=>{
          setTimeout(()=>{
            reject(10000);
          })
        }))
      },2000)
    })
  })
  .then((data)=>{
    console.log(data);
  }).catch(err=>{
    console.log(err)
  })


// 一上来默认创建一个成功的 promise
Promise.resolve(100).then(data => {
  console.log('data', data)
})

// 一上来默认创建一个成功的 promise
Promise.reject(403).then(res => {
  console.log('err', res)
})

// catch 捕获错误
Promise.reject(403).catch(res => {
  console.log('err', res)
})

Promise.reject(403).finally(res => {
  console.log('err', 'finally')
}).catch(err => {
  console.log('err finally', err)
})


// all的参数是个数组，一个失败，全部失败
Promise.all([]).then(function () {

}).catch(err => {
})


Promise.race()


