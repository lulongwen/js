/**
 * sessionStorage 语法
  // 设置本地存储
  sessionStorage.setItem('myCat', 'Tom')

  // 获取本地存储
  sessionStorage.getItem('myCat')

  // 删除一个
  sessionStorage.removeItem('myCat')

  // 删除所有
  sessionStorage.clear()


  响应存储的变化 StorageEvent
  调用其中任一对象会创建 Storage 对象,
  通过 Storage 对象，可以设置、获取和移除数据
  sessionStorage 和 sessionStorage 使用不同的 Storage 对象——独立运行和控制
    调用 sessionStorage 将会返回一个 Storage 对象；
    调用 sessionStorage 返回一个不同的 Storage 对象。
    可以使用相同的方式操作这些对象，但是操作是独立的

  创建/更新/删除数据项时， 触发 StorageEvent
  重复设置相同的键值不会触发 StorageEvent

  兼容性
  https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/sessionStorage
 */


const sessionStorage = window.sessionStorage
const session = {
  // 值的类型
  type: object => Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1],

  // 获取
  get: (key='') => {
    let value = sessionStorage.getItem(key)
    if(!value) return

    let obj = value.substr(0, 1) === '{' || value.substr(0, 1) === '['
    return (obj ? JSON.parse(value) : value)
  },

  // 设置
  set(key, value=''){
    let type = this.type(value)
    if( type === 'Object' || type === 'Array') value = JSON.stringify(value)
    return sessionStorage.setItem(key, value)
  },

  // 删除一个
  remove: (key='') => sessionStorage.removeItem(key),

  // 清除所有
  clear: () => sesstoinStorage.clear(),

  // 所有key
  keys: () => Object.keys(sessionStorage),

  // event 事件
  ev: () => window.addEventListener('storage', (ev) => {
    console.log('storage', ev)
  })
}

export default session