const event = {
  queue: [], // 中介者
  on (fn) {
    this.queue.push(fn)
  },
  emit (data) {
    this.queue.forEach(fn => {
      // 把参数传入回调函数里面
      fn(data)
    })
  }
}

event.on(data => {
  if (data.length === 2) {
    console.log('data', data)
  }
})
