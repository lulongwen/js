/**
 * Object 对象深拷贝，深拷贝 现在的对象 和以前的没有关系
 * 
 * ... 剩余运算符，展开运算符, 展开运算符 深拷贝
 *  对象也可以展开 深拷贝和浅拷贝
 *  ... 只会拷贝一层 如果有多层的情况  需要一层层的展开
 * 
 * 
 * JSON.parse(JSON.stringify) 并不支持函数和正则
 * 
 * 
 */

// ... 深拷贝
var obj = { name: { name: 'this summer' }, a: 1 };
var obj2 = { age: 9 };
var obj3 = { ...obj, name: { ...obj.name }, ...obj2 };
obj3.name.name = 'watermolen'


var obj = Object.assign({}, obj, obj2)

// JSON.parse() 深拷贝, 不支持 正则和 函数
var obj3 = JSON.parse(JSON.stringify(obj))


// 递归深拷贝
function deepClone(obj) {
  // 如果不是 对象，直接返回这个值
  if (typeof obj !== 'object') return obj
  // 如果是 undefined 或 null，就返回 null
  if (obj == null) return null
  
  // 处理日期和 正则
  if (obj instanceof RegExp) return new RegExp(obj)
  else if (obj instanceof Date) return new Date(obj)

  // 看当前实例的constructor
  let instance = new obj.constructor()
  // 实现深拷贝
  for(let key in obj) {
    instance[key] = (typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key]
  }

  return instance
} 

var obj2 = deepClone(obj)