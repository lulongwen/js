# Array 数组方法


## Array 有多少种数组遍历的方法
* forEach
* Array.from() 将类数组转为数组
* Array.of 生成新的数组
* find & findIndex 如何查找数组
* includes 数组中如何判断元素是否存在

* [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)


## 遍历数组

```js
var arr = [ {name: "Alice"}, {name: "Bob"}, {name: "Jeremy"} ]
  arr.map( item => item.name)
  // ["Alice", "Bob", "Jeremy"]

var notes = ['profile', 'settings']
notes.forEach( (item, index) => {
  if(notes.length === (index+1)) {
    console.log(item);
    // 'settings'
  }
})
```

