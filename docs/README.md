# JavaScript 6-10 技术栈

> Author: 卢珑文 <br>
> Email: lulongwen@live.com <br>
> Wechat: 18915972355 <br>
> Website: https://www.lulongwen.com <br>
> Github: https://github.com/lulongwen <br>

**大前端时代的变化**

* SPA
* MVVM 工程化
* 跨端 React Native & UniApp
* Node 全栈


## JS技术学习路线

1. callback
2. promise
3. es6
4. class
5. event-loop
6. node
7. npm
8. node-core
9. buffer
10. stream
11. http
12. koa
13. express
14. webpack
15. typescript
16. vue
17. react



## 1 JS数据结构和算法
### JS 设计模式


## 2 JS 性能优化


## 3 ES6-10
### [ES6 基础](3.es6/es6)
### ES 8-10 新增
### [Promise 异步](4.promise/async)


## 4 TypeScript


## 5 JS 数据可视化


## [6 JavaScript 基础](6.es2015/1.js.md)
### 6.1 内置函数

#### Array
#### Object
#### Function
#### Boolean
#### Date
#### Number
#### String



#### Error


### 6.2 内置对象
#### [RegExp 正则表达式](6.es2015/RegExp/regexp)
##### [常用的正则](6.es2015/RegExp/1.reg.md)
##### [正则语法](6.es2015/RegExp/regexp)

#### Math
#### JSON
#### window
#### document


### 6.3 DOM


### 6.4 BOM

### Event 事件


### 6.5 OOP 面向对象



## [JS动画库](JS库/JS库.md)

### TweenMax
### Swiper.js
### anime.js

* 变量与 原型链
* 作用域和闭包
* JS异步操作 & 单线程

* JS内置对象
* DOM & BOM & 事件 & Ajax跨域

* 闭包
	* 作用域
	* 作用域链

* 函数
	* 函数声明 & 函数表达式(匿名函数)

* 原型 & 原型链 
* DOM
* BOM
* 面向对象 & 继承
* 递归
	* 经典例子就是斐波拉契数列
* 高阶函数
* JS内置方法

* JS内置对象
	* Math
	* RegExp

* Vanilla JS is a joke，就是指原生JS而已，各位别再被套路


### switch & if else
* 低于5个选项 if快，高于5给选项 switch快
* if语句更适合于对区间（范围）的判断
* switch语句更适合于对离散值的判断
	* 判断65分到85分之间的学生有哪些？用 if语句
		* 因为[65,85]是区间

	* 判断一个学生的班级是一班、二班还是三班？用 switch语句
	* 因为一班、二班、三班是离散值



## JS数据类型

### 简单数据类型
	* String
	* Number
	* Boolean
	* Undefined
	* Null
	* Symbol
	* 5中基本数据类型 + ES6 新增的 Symbol
	* 基本类型
		* 在内存中占据实际大小的空间
		* 赋值的时候，会在内存中创建一份新的副本
		* 保存在 【栈内存】 中

### 复合数据类型 object
* 对象
	* Object {} 对象
	* Array [] 数组
	* /^$/ 正则
	* Math 对象

* 函数
	* function 普通函数
	* 类
	
* 引用数据类型
	* 指向对象的指针而不是对象本身
	* 赋值的时，只是创建了一个新的指针指向对象
	* 保存在 【堆内存】 中

### 判断数据类型
	* typeof
	* instanceof
	* Object.prototype.toString.call()


