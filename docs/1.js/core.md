# JS 源码实现

## 1 高阶函数

### 柯里化函数

把接收多个参数的函数变成接收一个单一参数的函数，返回接收余下的参数且返回结果的新函数

### 反柯里化
    - 增加被反柯里化方法接收的参数
    - 当我们调用某个方法时，不用考虑这个对象在被设计时，是否拥有这个方法，
    - 只要这个方法适用于它，就可以对这个对象使用这个方法；不是我的方法，转化之后可以使用
    - `Object.prototype.toString`

### CO 原理
 
### reduce 原理


### flat 原理


## 2 手写 Promise
1. promise 流程
    - then 链式调用原理
    - finally 原来
    - Promise.all
    


## 3 手写 CommonJS


## 4 手写 JS模板引擎


## 5 手写 EventEmitter


## 6 手写 devServer


## 7 cloneDeep 深拷贝

## 手写 Koa
1. ctx.body 如何赋值
2. async & await 重写 compose方法
3. compose.next() 方法如何避免多次调用
4. 实现 body.parse



