# let & cont & var

1. ES6 提供了新的变量声明代替 var
2. var 全局变量, 支持变量预解析 var 和 Function 支持预解析
3. let const 块级变量，局部变量, let不支持**变量提升预解释**
    - let & const 支持局部作用域
    - const 声明常量，具有块级作用域
 
    
## 内存管理
 * [mdn 内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)
 * 不管什么程序语言，内存生命周期基本是一致的：   
    * 分配你所需要的内存
    * 使用分配到的内存（读、写）
    * 不需要时将其释放\归还
    
    
## let 声明的变量拥有块级作用域

* {} 局部作用域，函数作用域，以前的闭包可以写成 {}
* let 支持块级作用域，声明的变量只会在当前的作用域内有效
* let 可以解决 作用域污染问题和局部作用域的问题

```jsx
    let arr = [1,2,3]
    arr = [1,2,3] // 没问题

    // 'use strict' 严格模式
    // 必须声明 'use strict'; 后才能使用 let声明变量，否则浏览并不能显示结果
    function(){
      'use strict';
      let hello = 'hello'
    }

    function b() {
        let a = 3
    }
    b()
```

### let声明的变量不会进行变量提升
* 变量预解析问题: 变量提升 用 let 解决变量提升问题
* 暂存死区,如果作用域内 有这样一个变量，那么这个作用域内就会绑定这个变量，不会继续向上查找了 

```jsx
let a = 'ok'
{
    // 作用域内有 a 不会向上查找
    console.log('a', a) // undefined
    let a = 2;
}

console.log(a)
let a = 1   // 报错 Cannot access 'a' before initialization
```


### 用let重定义变量会抛出一个语法错误
* let 在同一个作用域下可以多次声明同一个变量，报错
* Identifier 'a' has already been declared，
* 变量被重复声明, 如果用 let 声明过了 就不要再用 var了

```jsx
let a = 1
let a = 2 // 报错
var a = 3 // 报错
a = [1,2,3]
// VM131:1 Uncaught SyntaxError: Identifier 'a' has already been declared
```


### let 声明的全局变量不是全局对象的属性

* 不可以通过 window.变量名 的方式访问这些 let变量
* var 声明的全局变量是 window 的属性，是可以通过 window.变量名访问

```jsx
let a = 1
console.log(window.a); // undefined

var a = 1
console.log(window.a); //1
```


## const

* 用 const 定义变量后，我们就不能修改它了，对变量的修改会抛出异常
* const 声明的变量不能被修改，不能被修改引用空间，不能修改变量的地址
* 比如 const 声明了变量为 String，在修改其他类型会报错
* 如果是引用类型 [], {}，可以修改属性，和新增属性

```jsx
    const arr = [1,2,3]
    arr = [1,2,3] // 报错 Assignment to constant variable

    const OK = 'ok'
    OK = 123 // Assignment to constant variable.
    
    const obj = {name: 'lucy'}
    obj.age = 20 // {name: "lucy", age: 20}
    
    obj = [1,2,3] // 报错 Assignment to constant variable
```

### const 声明变量必须初始化值

```jsx
    const a // Uncaught SyntaxError: Missing initializer in const declaration
```


## var 全部变量

* var的特点：不支持局部作用域，全局变量声明
* 函数作用域
* 全局作用域

* ES6默认开启严格模式，变量未声明不能引用，报错
* `console.log(ok)` 报错

```jsx
(function() {
    for(var i= 0; i< 3; i++) {
        console.log('i', i)
    }
})()

console.log('out', i, 'window.i', window.i)

for(var i=0; i< 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log('for 闭包',i)
    }, 1000)
  })(i)
}

```


## 变量作用域面试题

```jsx
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

for (var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(function () {
            console.log(i)
        }, 1000)
    })(i)
}
```
