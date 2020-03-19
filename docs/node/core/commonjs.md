# commonjs 规范

1. 浏览器中直接访问 this -> window
2. node 中访问 this -> {}
3. REPL
   - read-eval-print-loop
   - 当前 node 环境下执行文件，默认文件外面加了一个闭包
4. node 为了实现模块化，使用了 commonjs 规范
5. vscode debug 配置

```jsx
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "my debugger",
      "program": "${file}",
      "cwd": "${cwd}"
    }
  ]
}
```

## 1 模块化

1. require.js amd 依赖前置
2. sea.js 就近依赖

3. 为什么要有模块化

   - 代码方便维护，命名空间，避免污染全局变量
     - 命名空间，所有属性都放在对象内，命名空间不能完全解决这个问题
   - 每个功能放到一个模块内
     - IIFE 匿名函数自执行，实现模块功能，需要把最终的结果对外暴露

4. 浏览器的文件加载 http 请求，异步问题
   - node 中实现模块化非常容易：node 可读写文件，用 nodeAPI 读取文件，实现模块化功能

## 2 commonjs 的要点

1. 如何声明一个模块，node 中一个文件就是一个模块，commonjs 是同步的读取
2. 每个模块都需要导出最终的结果 `module.exports`
3. 每个模块引用其他的模块时，都需要使用 `require语法`
4. `module.exports 和 exports` 对象指向同一个空间；但 `exports` 指向改变了，不会导致 `module.exports`更改
   - 如果 `exports.a` 赋值了，再更改 `module.exports`，那么 a 会丢失

```js
let str = require('./a.js')(
  // a.js
  function() {
    module.exports = 'ok'
    return module.exports
  }
)()
```

5. require 读取到的文件内容是一个字符串，那么怎么让一个字符串执行
   - `eval()` 不干净的执行，变量污染；eval 会取当前模块中的变量
   - `new Function()()`
   - node 执行 `vm` 沙箱环境 虚拟机

## 3 vm

    - `vm.runInThisContext()` 无法获取本地作用域
    - `eval()` 能获取本地作用域
    -  `vm.runInThisContext()` 更像是间接的执行 `eval()`, 就像 `(0,eval)('code')`

## 4 commonjs 原理实现

1. 每个模块都有一个 require 方法，`Module.prototype.require`
   - 模块加载
   - 解析文件路径
   - 模块的缓存

```jsx
Module.load 模块的加载
Module.resolveFilename 解析出文件的绝对路径
Module.cache 模块的缓存，如果有直接返回 module.exports
```

2. 产生模块 `new Module` 模块上有 2 个重要的属性

   - id
   - exports 对象

3. 将模块放入缓存中
4. 尝试加载模块 `require(./a.js)`，`a.js, a.json, a.node`

   - Module.extensions 根据文件后缀名，做对应的文件处理

5. Module.wrap 把内容给包裹起来
   - `vm.runInThisContext`
