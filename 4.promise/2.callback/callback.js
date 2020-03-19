// 回调函数，将后续的处理逻辑传入到当前要做的事，事情做好后调用此函数
let a = ''

function buy(){
  setTimeout( () => {
    a = '包包'
  }, 2000)
}

buy()
console.log('a', a) // ''


// 优化，将 callback 传入 buy()
function buy2(callback){
  setTimeout( ()=>{
    a = '香水'
    callback && callback(a)
  })
}

// 回调函数，即后续逻辑
buy2(function (){
  console.log(a)
})


// promise 回调函数
let bag = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = '香水'
    resolve(a)
  }, 1000)
})

bag.then(data => {
  console.log('我的', data)
})


// 函数 return 一个 new Promise，封装的 Promise函数
function buyBag(){
  return new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
      if(Math.random() > 0.5) {
        resolve('买包包') // 成功
      }
      
      reject('要买好吃的') // 失败
    }, Math.random*1000);
  })
}

buyBag().then(data =>{
  console.log('有钱', data)
}, err =>{
  console.log('没钱了', err)
})
