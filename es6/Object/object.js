/**
 * 深拷贝 现在的对象 和以前的没有关系
 * JSON.parse(JSON.stringify) 缺点：并不支持函数和正则
 * 
 * 
 * Object.is() 是用来处理极端情况的，比如NaN. NaN 和任何数都不相等，包含它本身，
 *  没有办法直接比较，现在就可以调用Object.is() 方法了
 *  
 * Object.is() 是对=== 操作符在某些极端情况下的纠正
 */
Object.is(NaN, NaN)  // true

Object.is(+0, -0) // false

Object.is(2, '2') // false

Object.is(2, +2) // true

Object.is(2, -2) // false

Object.is(Math.PI, Math.PI) // true

Object.is(Math.PI, 3.1415926)  // false




/**
 * Object.assign() 用来合并对象
 *  将所有可枚举属性的值从一个或多个源对象复制到目标对象。返回目标对象
 *  Object.assign(target, ...sources)，target 目标对象，sources： 源对象
 */

var obj = Object.assign({}, {name:'ggb'})
var obj2=Object.assign({}, {name:'ggb'},{age:'28'});//可以有多个参数

var target = { a: 1, b: 2 }
var source = { b: 4, c: 5 }

var obj = Object.assign(target, source) // 修改了 target
console.log(obj === target) // true


var obj = Object.assign({}, target, source) // 没有修改 target




/**
 * Object.setPrototypeOf() 设置一个对象的原型对象
 *  接受两个参数，
 *  一个是对象，
 *  一个是对象要链接到的原型对象
 * Object.setPrototypeOf(obj, prototypeObj)
 * 
 * ES6 提供了super 关键词，它就指向原型对象
 *  super 通过Object.getPrototypeOf([[HomeObject]]) 来获取到原型对象
 */


// super
var obj = {
  eat() {
    return super.eat() + 'obj';
  }
}