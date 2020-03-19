// 对象的深拷贝
function cloneDeep (obj, hash = new WeakMap()) {
  // null undefined
  if (obj == null || typeof obj !== 'object') return obj

  // 如果是 new String('123') 或 new RegExp(/\s+/)
  const types = [Number, String, Boolean, Date, RegExp]
  let find = types.find(type => obj instanceof type)
  if (find) return new find(obj)

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

// 判断数据类型
function isType(obj) {
  // .call(obj).replace(/\[object\s|\]/g, '')
  // tostring 返回对应不同的标签的构造函数 isString(123), isBoolean
  const callObj = Object.prototype.toString.call
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
    "[object Symbol]": "symbol"
  }

  if (obj instanceof Element) return "element"

  return map[callObj(obj)]
}
