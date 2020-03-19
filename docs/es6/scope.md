# scope 作用域

### 什么是作用域？
* 所有编程语言就是在变量中存储值，并且能读取和修改此值；
* 变量中存储值和取出值的能力，给程序赋予了状态。

### 作用域主要分为几个类型
* 全局作用域 `window` & `global`
* 函数作用域 `function(){}`
* 块状作用域 `{}`
* 动态作用域 `this`
    
### 作用域链
* 如果一个 变量 或者其他表达式不在 “当前的作用域”；
* 那么 JavaScript 机制会继续沿着作用域链上查找直到全局作用域：global或浏览器中的window；如果找不到就是 undefined；
* 作用域也可以根据代码层次分层，以便子作用域可以访问父作用域；
* 通常是指沿着链式的作用域链查找，不能从父作用域引用子作用域中的变量和引用
    
### 静态作用域

* 作用域是在代码编写的时候就已经决定了呢，还是在代码执行的过程中才决定的？
    * 变量的作用域是在：定义时决定，而不是执行时决定
* 函数内部的用 `var` 定义的变量就是函数作用域。这个也就是专业术语：词法作用域
    * 词法作用域也叫做静态作用域
* 只能在执行阶段才能决定变量的作用域，那就是动态作用域，比如 `this`

```jsx
// 静态作用域
var name = " Volvo";
    
console.log(name)
function fn() {
    // 函数内可调用 name 变量，name 就是全局作用域
    console.log(name)
}


// 动态作用域
function foo() {
    console.log(a) // 2  (不是 3!)
}
function bar() {
    var a = 3
    foo()
}

var a = 2
bar()
```
    
    
### 变量生命周期

* JavaScript 变量生命周期在它声明时初始化；
* 局部变量在函数执行完毕后销毁；
* 全局变量在页面关闭后销毁


## 全局作用域 `var`

* 变量在函数或者代码块 `{}` 外定义，即为全局作用域
* 不过，在函数或者代码块 {} 内未定义的变量也是拥有全局作用域的，不推荐这种做法
* 全局变量可以在任意地方被读取或者修改

```jsx
var name = " Volvo";
    
// 此处可调用 name 变量
console.log(name)

function myFunction() {
    // 函数内可调用 name 变量
    console.log(name)
}
```


## 函数作用域 `function() {}`

* 变量在函数内声明，变量为局部作用域
* JavaScript 函数作用域: 作用域在函数内修改
* 函数参数只在函数内起作用，是局部变量
    * 函数作用域内，对外是封闭的，从外层的作用域无法直接访问函数内部的作用域！
    * 如果想读取函数内的变量，必须借助 return 或者闭包
    * return 是函数对外交流的出口，return 可以返回的是函数;
    * 根据作用域的规则，函数内部的子函数是可以获取函数作用域内的变量的。
    


```jsx
function fn() {
    var name = 'lucy'
    console.log(name)
}
console.log(name)

// return
function fn(value) {
  var test = 'inner'
  return test + value
}
console.log(fn('fun'));

// 闭包：函数嵌套函数，作用域链
function bar(value) {
  var test = 'inner'
  var rusult = test + value

  function innser() {
     return rusult
  }
  return innser()
}
console.log(bar('fun'))

```


## 块状作用域 `{}`

* if 后 {} 就是“块”，
* 这个里面的变量就是拥有这个块状作用域，按照规则，{} 之外是无法访问这个变量的

```jsx
if(true){
  let a = 1
  console.log(a)
}
```


## 动态作用域 `this`

```jsx
window.a = 3
function test () {
  console.log(this.a)
}

test.bind({ a: 2 })() // 2
test() // 3
```
*  bind 已经把作用域的范围进行了修改指向了 { a: 2 }
* 而 this 指向的是当前作用域对象


## js 作用域参考资料

* [什么是作用域](https://www.kancloud.cn/kancloud/you-dont-know-js-scope-closures/516610)
* [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)
* [深入理解JS中声明提升、作用域（链）和this关键字](https://github.com/creeperyang/blog/issues/16)
