# 异步发展
> 1. 异步：JS运行机制？那些是方式异步的
    1. 定时器
    2. 事件绑定
    3. Ajax
    4. 回调函数
  
2. 异步流程解决方案
    1. 发布 & 订阅模型，观察者模式
    2. 哨兵变量
    3. Promise & Deferred 模式
    4. 生成器 Generator & yield, `CO` 库
    5. async & await 写起来越来越像同步代码
     

## 1 高阶函数
1. `Higher-Order Function` 函数作为参数传递 或 函数作为返回值
2. 回调函数：将一个函数传入另一个函数中，在这个函数内部调用此函数
3. 在函数式编程中：回调函数被称为 lambda表达式
    - 用于批量生成函数
    - 需要被调用多少次才执行的函数 after
    - 柯里化函数，返回一个函数，拆分函数；**把一个多参数的函数转化为单参数函数的方法**
    - 将核心的逻辑提取出来，在外面添加功能，去扩展逻辑；装饰器模式
    
4. 柯里化函数 currying
    1. 柯里化的函数是分步执行的，第一次调用返回的是一个函数，第二次调用的时候才会进行计算。起到延时计算的作用，通过延时计算求值，称之为惰性求值
    2. 动态生成函数
    
    
### 高阶函数的应用
1. before函数
2. react事务函数
3. isString类型检查
4. 柯里化函数
5. after函数
6. 发布订阅模式，观察者模式

```js
// 将函数作为函数的参数传递进去（回调）
function calc (x) {
  return function (y) {
    return x + y
  }
}

// after 在调用多少次后执行
function after(times, callback) {
  return function() {
    if (--times === 0) {
      callback && callback()
    }
  }
}
```


## 2 AOP 面向切片编程

- `Aspect Oriented Programming` 
- 面向切片编程；把代码二次封装，不破坏原有代码逻辑，插入自己的逻辑
- 装饰器模式 @
- lodash \_after 函数


## 3 发布订阅

1. 依赖一个中介者
2. 发布：发布时依次执行；订阅：先把它暂时存起来


## 4 观察者模式

观察者和发布订阅的区别



## 5 Promise 应用
1. Promise 链式调用，解决多个回调嵌套关系；回调地狱
    - 接口请求：先获取 name，通过 name再获取对应的 age
    - 返回一个新的 Promise实现链式调用
2. 解决异步并发请求问题，同步多个异步方法的执行结果
    - 手写一套符合 Promise A+规范的 Promise
4. Promise简单说就是一个容器，里面保存着某个未来才会结束的事件，通常是一个异步操作的结果
5. 为什么是 then方法
    - Promise文档中说了，`[[PromiseValue]]`是个内部变量，外部无法得到，
    - 只能在then中获取 `resolved`状态了，直接调用这个 promise的 then方法就可以了，then方法就相当于异步成功后的回调函数

5. Promise的方法

```jsx
.race() 谁跑的快的为准，执行回调
.all() 谁跑的慢的为准，执行回调
.finally()
.try()
```

6. jquery有自己的 Promise实现 `$.Deferred`
```js
$dfd = $.Deferred()
$dfd.resolve()
$dfd.reject()
```


### 异步的问题

1. 异步不支持 try catch
2. 多个异步，如果有顺序关系，可能会导致回调地狱
3. 异步没有 return


### Promise 的特点：
1. 每次 `new Promise` 函数会立即执行，`resolve, reject` 也是一个函数
2. 每个 promise 上都有一个 `then` 方法，方法中传递2个函数，分别代表成功和失败执行的回调函数
3. 一旦成功，就不能失败；一旦失败，就不能成功


## 6 手写 Promise A+规范

- [Promise A+](https://promisesaplus.com)

1. promise的3个状态
    -  pending 默认：等待状态
    - fulfilled 成功态
    - rejected 失败态
    
2. then方法更改状态 `resolve & reject`
3. 一个实例可以 then多次：发布订阅
4. 链式调用：返回一个新的 proimse2，promise2 和 x promise返回值的关系
    - `resolvePromise`，x 是不是一个 promise，是promise就需要then，并且递归解析
    - `resolvePromise` 本质让 promise返回一个普通值，如果是 promise 递归解析到普通值
    - `promise2 === x`，普通值直接返回
    - 有可能成功和失败都会被调用，called 阻止

5. then 参数是可选参数：做判断
6. resolve中返回的可能还是 promise：改造promise方法
7. 实现 deferred方法
8. try 捕获错误
9. abort 终止 promise执行


![promise plus](images/a.jpg)

```js
p.catch()
p.finally()
p.resolve()
p.reject()

Promise.deferred
Promise.all
Promise.race
```

## 7 generator


## 8 async & await

1. async 函数的语法不难，难在错误处理上
2. 事件处理函数不能设置为 `async`, 按钮点击不能执行 `async function`, 报错

3. async 函数返回一个 Promise 对象
    - async 函数内部 return 返回的值, 会成为 then 方法回调函数的参数
    - 如果 async 函数内部抛出异常，则会导致返回的 Promise 对象状态变为 reject 状态, 抛出的错误而会被 catch 方法回调函数接收到
    - 只有当 async 函数内部的异步操作都执行完，才会执行 then 方法的回调
    
- promise 参考资料
  https://juejin.im/post/5b6e5cbf51882519ad61b67e

```jsx
  async function fn() {
    return 'vue'
  }
  // 'vue'
  fn.then(data => console.log(data))


  如果 async函数内部抛出异常，则会导致返回的 Promise 对象状态变为 reject 状态,
  抛出的错误而会被 catch 方法回调函数接收到

  async function fn() {
    throw new Error('throw error');
  }
  fn().then(data => console.log(data))
    .catch(err => console.log('err',err))


  async 函数返回的 Promise对象，必须等到内部所有的 await 命令的 Promise 对象执行完，才会发生状态改变
  也就是说，只有当 async 函数内部的异步操作都执行完，才会执行 then 方法的回调

  const delay = timeout => new Promise((resolve, reject) => {
    setTimeout(() => resolve, timeout)
  })

  async function fn() {
    await delay(1000)
    await delay(1000)
    await delay(2000)

    return 'done'
  }
  // 等待 4s后才输出 'done'
  fn.then(data => console.log(data))


  await 命令后面跟着的是 Promise ，如果不是的话，也会被转换成一个立即 resolve的 Promise
  如果返回的是 reject 的状态，则会被 catch 方法捕获

  async function fn() {
    return await 'ok'
  }
  // 'ok'
  fn.then(data => console.log(data))

```

## async & await 函数的错误处理

- async 函数的语法不难，难在错误处理上
- 当 async 函数中只要一个 await 出现 reject 状态，则后面的 await 都不会被执行
  - 解决方法 try/catch
  - 如果有多个 await 将 await 都放在 try/catch 中

```jsx
let a;
async function fn() {
  await Promise.reject("error");

  a = await "ok"; // reject后 await 并没有执行
}

fn().then(data => console.log(data));

// 处理 reject错误
let a;
async function fn() {
  try {
    await Promise.reject("error");
  } catch (err) {
    console.log("err", err);
  }

  a = await "ok";
  return a;
}

fn().then(data => console.log(data)); // ok
```
