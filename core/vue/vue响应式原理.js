// vue2.0 数据响应原理，对象用 Object.defineProperty；

// 1 数组数据劫持：修改数组的原型链
const arrayPrototype = Array.prototype
const proto = Object.create(arrayPrototype) // {} __proto__ -> Array.prototype
const methods = ['push', 'shift', 'unshift', 'pop', 'reverse']

methods.forEach(item => {
  // 修改数组的原型链
  proto[item] = function () {
    update()
    arrayPrototype[item].call(this, ...arguments)
  }
})


// 2 对象数据劫持 Object.defineProperty
function proxyData (target, key, value) {
  observe(value) // 递归观察值是不是对象
  
  Object.defineProperty(target,key,{
    get () {
      return value
    },
    set (newValue) {
      if (newValue === value) return
      
      observe(newValue)
      value = newValue
      update()
    }
  })
}

function update () {
  console.log('update view ui')
}

// 观察数据，不是对象类型直接返回
function observe (target) {
  // 1 普通值直接返回这个值
  if (typeof target !== 'object' || target === null) {
    return target
  }
  
  if (Array.isArray(target)) {
    // 修改数组的原型链
    Object.setPrototypeOf(target, proto)
    
    target.forEach(item => { observe(item) })
    return
  }
  
  // 对象劫持
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      proxyData(target, key, target[key])
    }
  }
}

// 新增属性响应式
function set2 (target, key , value) {
  if (typeof target !== 'object' || target == null) {
    throw new Error('target 必须是数组或对象')
  }
  
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, value)
    return value
  }
  
  if (key in target && !(key in Object.prototype)) {
    target[key] = value
    return value
  }
  
  target[key] = value
  proxyData(target, key, value)
  return value
}

// 如果属性不存在，新增的属性不是响应式的
let data = {
  name: 'longwen',
  age: [1, 20, 30, 28, 23],
  good: {
    web: 'vue',
    ui: 'react'
  }
}

observe(data)
data.age = [...data.age, '200', '899']

