/**
 * localStorage 语法
  // 设置本地存储
  localStorage.setItem('myCat', 'Tom')

  // 获取本地存储
  localStorage.getItem('myCat')

  // 删除一个
  localStorage.removeItem('myCat')

  // 删除所有
  localStorage.clear()
 */


const localStorage = window.localStorage
const storage = {
  type: object => Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1],

  get: (key='') => {
    let value = localStorage.getItem(key)
    if(!value) return

    let obj = value.substr(0, 1) === '{' || value.substr(0, 1) === '['
    return (obj ? JSON.parse(value) : value)

    /* try 方法
    try {
      if( typeof JSON.parse(value) === 'object' )
        return JSON.parse(value);
    }
    catch(e) { throw new Error('解析 localStorage 失败') }
    return value; 
    */
  },

  // 不能用箭头函数， this 指向 window
  set(key, value='') {
    let type = this.type(value)
    if( type === 'Object' || type === 'Array') value = JSON.stringify(value)
    return localStorage.setItem(key, value)
  },

  remove: (key='') => localStorage.removeItem(key),

  clear: () => localStorage.clear(),

  keys: () => Object.keys(localStorage),

  ev: (fn) => window.addEventListener('storage', (ev) => {
    return fn && fn()
  })
}

export default storage
