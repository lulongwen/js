# js中的 delete性能

* JS的 delete 操作符并不会直接释放内存
* 最有效的delete方式，将不需要的属性设置为 undefined
```jsx
  const person = {
    name: 'sudada',
    gender: 'female'
  }

  person.name = undefined // 删除 name 属性

```



## hidden class
* 什么是 hidden class ？
* JavaScript 是一种动态编程语言，属性可进行动态的添加和删除，
* 这意味着一个对象的属性是可变的，
* 大多数的 JavaScript 引擎（V8）为了跟踪对象和变量的类型引入了隐藏类 hidden class 的概念，
* 在运行时 V8 会创建隐藏类，这些类附加到每个对象上，以跟踪其形状/布局。这样可以优化属性访问时间
  * JS的 delete 操作符并不会直接释放内存，让V8（Javascript）引擎中的 hidden class 失效，
  * 而是将该 object 变为一个通用的 slow object，这就使得执行速度有了很明显的降低
  * 不使用 delete， 最有效的方式，将不需要的属性设置为 undefined
  * ` obj.name = undefined `


## map delete

* 在实际业务中可以考虑使用 Map 来代替 object

```jsx
let map = new Map([['a', 1]])
let obj = { a: 1 }

// 执行
delete obj.a
map.delete('a')

```

