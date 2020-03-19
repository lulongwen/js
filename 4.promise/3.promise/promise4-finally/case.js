const Promise = require('./Promise.js')

Promise.prototype.finally = function (final) {
  // Promise.resolve可以把这个函数包装成一个promise
  return this.then((value)=>{
    return Promise.resolve(final()).then(()=>value)
  },(err)=>{
    return Promise.resolve(final()).then(()=>{throw err})
  })
}

// finally 也是then的一个别名 但是肯定会执行，
// 如果返回的是一个promise，那需要等待这个promise执行完后才调用后续逻辑
Promise.reject(345)
  .finally(()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve();
      }, 5000);
    })
  })
  .catch((data)=>{
    console.log(data,'catch')
  })
