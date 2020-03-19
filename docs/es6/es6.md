# ES6 新特性

1. ESMAScript 6.0 > ES6 > ES2015
2. ES6 基本都是来自实际应用场景的规范, 为了适应未来我们应该好好学习 ES6及相关知识
3. [ES6语法](http://es6.ruanyifeng.com/#docs/promise)

```jsx
模块化 Module
    import
    export
箭头函数
默认参数，延展操作符
模板字符串

解构赋值，数组，对象的结构
Promise
```

## babel 编译 ES6

1. `@babel/cli` 命令行工具
2. `@babel/core` 核心包配置转化规则
3. `@babel/preset-env` 把es6 转化为 es5

```bash
npm install @babel/cli @babel/core @babel/preset-env

# 把 3.es5-class.js 编译成 class.js 并输出
npx babel 3.es6-class.js -o class.js
```


## 1 let const作用域

1. var声明变量的特点
    - 变量提升
    - 不支持作用域
2. let & const 不支持变量提升和预解析，有作用域限制
    - let, const 不会污染全局变量
3. [作用域](es6/scope)
    - 全局作用域 `window`
    - 函数作用域 `function () {}`
    - 块状作用域 `{}`
    - 动态作用域 `this`

4. [let-const-var](es6/let-const)


## 2 解构赋值
1. Array 数组的解构赋值
2. Object 对象的解构赋值
3. 深度嵌套解构赋值
4. 深拷贝 `WeakMap` 弱引用，浅拷贝 `Object.assign, ...`


## 3 class 类
1. 类的继承，如何继承一个类，es5构造函数模拟类
    - constructor, prototype, __proto__
    - super
    - static 静态方法
2. setter & getter 读写属性
3. static methods 如何操作方法
    - 静态属性 es7
    - 静态方法，不需要实例就能调用


## 4 函数的参数

1. 函数参数默认值 default parameters
2. rest parameter 处理不确定参数
3. spread operator rest 参数逆运算
4. 箭头函数没有 `this arguments prototype`
5. @装饰器模式


## 5 Object 对象的方法
1. Set Map 数据结构: WeakMap, WeakSet
    - 交集，并集，差集
    
```jsx
Object.assign 浅拷贝
Object.keys
Object.values

Object.entries
Object.getOwnDescriptor 获取 object数据的描述

Object.defineProperty
Proxy + Reflect

Object.rest
Object.spread
JSON.stringify()
```


## 6 Array 数组的方法

```jsx
reduce
reduceRight
map

forEach
compose
find
findIndex
some
every
filter

includes es7

```

## String 

* 字符串拼接
* 模板字符串
* 字符串补白


## Generator

* 如何让遍历停止
* scene pratice
* iterator


## Promise 异步操作

* callback
* Promise
    * then
    * resolve & reject
    * catch
    * all
* Promise.finally 兜底操作
* async & await
* await of


## Reflect 反射机制

* reflect.apply
* reflect.construct
* reflect.getOwnPropertyDescriptor


## Proxy

* proxy 该怎样使用代理
* revocable proxy


## module 

* 如何把代码进行模块化设计
* import
* export


## RegExp 正则

* sticky 修饰符
* unicode 修饰符
* dotAll
* 分组捕获 named, captured, groups
* 断言 lookbehind assert


## Math

* Math.pow





## ES6 浏览器兼容问题
* babel ES6
* http://babeljs.io/repl/ 通过babel将高级代码转化成es5
* chrome浏览器 一般采用62以上 import export






## ES6 核心知识点
* 新增的一种数据类型  Symbol
* let & const & var  声明变量
* 变量的解构赋值
* 新增的方法和属性，Array，String，Object
* 剩余，展开运算符 ...
* 箭头函数
* Class
* Promise
* Set & Map
  * set和map两种数据解构 不能放重复的内容
* for... of 迭代
* 多看一些面试题，基于 ES6 的解决思路，例如
  * 2个数交换位置
  * 求数组中的最大值，最小值
  * 数组去重


## ES6扩展
* String 扩展
```
  includes()
  `` 字符串模板
```


* Number 扩展
```
  将数字的小数部分去掉，只保留整数部分
  Math.trunc(value) // value 任意数字
```


* Array 扩展
```
  Array.from()
  find()
  findIndex()

  for of 循环 可以直接取到数组的值
```


* Object 扩展
```
  Object.assign()
  对象字面量
```


* Function 扩展
```
  rest 参数
  箭头函数
```


* 正则 扩展
```

```



## Object
```jsx
  Object.is() 用来⽐比较俩个值是否严格相等

  Object.assign() 浅拷贝

  增强对象的写法

  属性名表达式

```


## Promise
* 解决函数的回调地狱


## 箭头函数
```
  ... 扩展运算符
  rest 参数

  this指向，
  箭头函数不能当做构造函数，不能使用 arguments

```


## Generator 函数


## async函数


## Class的继承
```jsx

  class Person {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    sum() {
      return this.x + this.y;
    }
  }

```


## Module 语法
* Module 是解决模块化的问题
```jsx
  export 模块的导出
  import 模块的导入

1.js 
  var name = 'lucy'; var name = 23;
  export default {name, age}

2.js
  import {name, age} from './1.js';
  import * as Type from './1.js';

```


## Proxy


## Reflect


## Set & Map数据结构
* Map 类似于对象，也是键值对的集合
* “键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

```jsx
  JS 的 Object本身就是键值对的数据结构，但实际上属性和值构成的是 "字符串-值"对，属性只能是字符串，
  如果传个对象字面量作为属性名，那么会默认把对象转换成字符串，结果这个属性名就变成 [object Object]

  ES6 提供了”值-值“对的数据结构，键名不仅可以是字符串，也可以是对象。它是一个更完善的Hash结构

  const map1 = new Map()
  const objkey = {p1: 'v1'}

  map1.set(objkey, 'hello')
  map1.get(objkey) // hello
```


## Iterator & for...of..
