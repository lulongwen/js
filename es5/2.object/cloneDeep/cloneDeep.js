// 简单类型的深拷贝：数组，对象，简单类型的值
var cloneDeep = obj => JSON.parse(JSON.stringify(obj))

/*
深拷贝思路
  首先判断值的类型，如果是 null, undefiend 或简单类型 直接返回
  如果是 日期格式，正则，函数，DOM节点就返回对应的类型，不需要深拷贝
  函数不需要深拷贝
  是 [], {} 的话，就进行深拷贝

  对象引用的处理，new WeakMap()
    先把拷贝的对象放到 WeakMap里面，
    下次拷贝前，先判断 WeakMap里面有没有这个对象，有的话就返回这个对象
 */

 // 1 简单数据类型的深拷贝
function cloneDeep (obj) {
  // null undefined
  if (!obj || typeof obj !== 'object') return obj

  // 如果是 new String('123') 或 new RegExp(/\s+/)
  // if (obj instanceof RegExp) return new RegExp(obj)
  const types = [Number, String, Boolean, Date, RegExp]
  let instance = types.find(type => obj instanceof type)
  if (instance) return new instance(obj)

  // 是不是DOM节点
  if (obj.nodeType && typeof obj.cloneNode === 'function') {
    return obj.cloneNode(true)
  }

  // Object.prototype.toString.call(obj) === '[object Array]'
  // 保留引用或创建新对象，constructor 返回对创建此对象的数组函数的引用
  let proxy = new obj.constructor
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      proxy[key] = cloneDeep(obj[key])
    }
  }
  return proxy
}


// 2 对象的引用的深拷贝
function cloneDeep (obj, hash = new WeakMap()) {
  if (obj == null || typeof obj !== 'object') return obj

  // 如果是 new String('123') 或 new RegExp(/\s+/)
  const types = [Number, String, Boolean, Date, RegExp]
  let instance = types.find(type => obj instanceof type)
  if (instance) return new instance(obj)

  // 是不是DOM节点
  if (obj.nodeType && typeof obj.cloneNode === 'function') {
    return obj.cloneNode(true)
  }

  // hash表里有这个对象，就返回这个对象
  if (hash.get(obj)) return hash.get(obj)

  let proxy = new obj.constructor
  hash.set(obj, proxy)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      proxy[key] = cloneDeep(obj[key], hash)
    }
  }
  return proxy
}
