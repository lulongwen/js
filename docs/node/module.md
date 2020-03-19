# 模块

## 1 什么是模块

1. 每个JS文件都是一个模块
2. 模块内部声明的变量都是私有变量，外部无法访问

```jsx
math.js 导出模块
  const add = function(a,b) {return a+b }
  exports.add = add

加载模块
  var math = require('./math')

调用模块
  var sum = math.add(1,2)
```


## 2 模块分类

1. 核心模块, node 定义好的模块
  - `http, fs, path, vm`，不需要安装，直接引用

2. 文件模块, 自己写的 js文件
  - `const math = require('./math.js')`
  - 先找文件，找不到文件找文件夹，例如：`a.js 和 a/index.js`

3. 第三方模块, 第三方的插件
  - `var async = require('async')`
  - 在当前目录 node_modules 下查找，找相同名字的文件，默认找 `index.js`
  - 如果当前 node_modules没有找到这个模块，会一直向上查找，一直找到全局的 node_modules，如果没找到，就报错


### commonjs原理

1. 手写 commonjs原理


## 2 Node核心模块

1. buffer
2. fs
3. stream
3. util
4. http


## 3 文件模块

1. 第三方模块
