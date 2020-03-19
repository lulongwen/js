// react 事务函数：在开始的时候做某些事；在结束的时候做某些事
const perform = (fn, wrapper) => {
  wrapper.forEach(item => {
    item.initialize()
  })
  fn()
  wrapper.forEach(item => {
    item.close()
  })
}


perform(() => {
  console.log('saying ---')
}, [
  { // wrapper1
    initialize () {
      console.log('hello')
    },
    close () {
      console.log('bye bye')
    }
  },
  { // wrapper2
    initialize () {
      console.log('见到你👌')
    },
    close () {
      console.log('下次再见')
    }
  }
])
