# Node是什么

1. NVM 管理 Node版本
2. NRM npm源管理

* 基于 Chrome V8 引擎的 JavaScript 运行环境 
* 使用了事件驱动、非阻塞式 I/O 的模型，轻量又高效
* 使用场景广泛
	* WEB服务器
	* 实时应用
	* 分布式应用
	* 游戏
	* 工具等

* 主线程是单线程【异步】callback，将后续的逻辑写成函数，传入到当前执行的函数中，
	* 当执行的函数得到了结果后，执行传入的函数【回调函数】
    * 6个人同吃一碗饭

* 阻塞不能异步，阻塞是针对内核说的
* I/O
	* 读写操作，异步读写【能用异步绝不用同步】
* EventDriven
	* 事件驱动，发布订阅模式





## web异步操作
* setTimeout
* callback
* onclick
* ajax


## 全局对象 global
  global 表示 node所在的全局环境，类似于浏览器的 window对象
  它及其所有的属性都可以在程序的任何地方访问
  

## fs 文件模块
* readFileSync 同步读取文件，并返回一个字符串
  const text = fs.readFileSync(fileName, 'utf8')

* readFile 异步读取文件
  fs.readFile(fileName, 'utf8', function(err, data){ })


# Node.js

* 事件驱动，异步的非阻塞 I/O，是Node.js的精髓
* 前端跑浏览器， 后端跑服务器 | 数据库
* 事件循环
* 单线程
* 异步 IO


## 为什么要学习 Node.js
1. Node越来越流行，强大
2. Node的包管理系统是目前最大的开源库生态系统
    - Node.js 提供大量的库，用 JS可以调用操作系统的API
    - 采用了 V8引擎作为JS的解释器，运行速度快
    - JS语言的服务器运行环境
3. JS是 github使用最多的语言


## Node Core
```
浏览器中直接访问 this -> window
node为了实现模块化，用了 commonjs 规范

REPL read-eval-print-loop
    当前node执行环境下，执行文件，默认文件外面加了一个闭包

process 进程

Buffter 缓存，处理二进制

clearImmediate
setImmediate
setTimeout
setInterval

http
node 核心
stream 流
tcp
express

// 显示 global隐藏的属性
console.dir(global, {showHidden: true })

```


## process

1. `Object.keys(process)`

```jsx
argv 运行代码时，传入的参数
    process.argv.slice(2) 执行代码时获取传入的参数
    webpack --port 3000

env 环境变量

pid 当前运行进程的唯一标识

chdir 改变目录

cwd current working directory 

nextTick 下一个队列
```



## Nodejs 框架
* Express
	* LoopBack
		* 建立在 express上的企业级 Node框架
		* 写少量代码就能创建的动态端到端的 REST API

* Koa
	* express -> koa -> egg
	* Egg.js
		* 基于Node.js 和 Koa2.x 的一个Nodejs的企业级应用开发框架
		* async的特性让我们避免了回调地狱
		* 洋葱式的中间件架构让我们更容易后置逻辑
		* 内置的多进程管理会帮我们更好的利用服务器性能
		* 更方便的单元测试，更加约束的目录架构

	* ThinkJS
		* 框架底层基于 Koa2.x 实现，兼容 Koa 的所有功能

* Hapi
* Sail



## Node 中间件



## Node全栈
```
  借力，东西太多，时间有限
  不要自己研究，
  社区的价值所在，一个人钻研，带动其他人学习

  云服务越来越发达，测试容器，兼容工具
  作为开发人员，调用 API

	1 fock
  2 git clone 到本地


Nodejs - 后端开发，选用了 JS这门语言
你了解后端开发吗？光会一门语言的语法是远远不够的
	后端开发和前端开发完全是不同的思路和设计
	steam server端的概念
	fs | 存储 sever端的概念，以及 服务器的运维
		负载均衡，监控，报警等
	
	Nodejs并不是像原型，异步那样，只属于JS的一个模块
	Nodejs是一个独立的技术栈，只不过是用了 JS语法而已


	REPL Read Eval Print Loop
		读取 求值 输出 循环
	在命令行输入 node命令，后面没有文件名，可以直接运行各种 JS命令
	node
		5+5

	特殊变量下划线 _ 表示上一个命令的返回结果
	_+5
		15
	_*10
		150

	在 REPL中，运行一个表达式，会直接在命令行中返回结果
	如果运行一条语句，就不会有任何的输出，因为语句没有返回值
		var name = 'ok'
			undefined
		1+5
			6

	异步，事件驱动模型，非阻塞 I/O
	模块和包
	全局对象 global
	fs文件模块


```


## 区分环境变量



## 什么是模块



## 模块的使用



## 安装 npm包



## 发布 npm包



## 核心模块


## promisify 异步函数













## NVM 管理 Node版本

```
node -v  // 查看node版本
npm -v  // 查看npm 版本
express --version   // 查看express 版本
```

- node.js 给前端带来了一场革命
	+ 安装node.js 过程可以自动安装 npm（node packages manager）
	+ npm3 以前的版本关系是层级依赖
	+ npm3 以后的版本关系改为平行依赖（解决windows上路径过长的问题）


### 1 `npm install` 安装 npm包
- [npm 官网](http://www.npmjs.com)

- `npm install` 简写 `npm i`
	+ `npm i -g` 全局安装
		+ `npm install gulp -g`

	+ npm install 不加参数，不会更新 package.json，只会下载到本地

- `--dependcies` 生产环境依赖
	npm i --save 下载 dev依赖的包

- `--devDependencies`开发过程依赖
	npm i --save-dev 下载 dev依赖的包


###  2 `npm update` 更新全部包
- `npm update jquery` 只更新 jquery


### 3 `npm uninstall` 卸载npm包
	+ `npm uninstall gulp --save`  卸载 dependencies 里面的包

	+ `npm uninstall gulp --save-dev` 卸载 devDependencies 里面的包


- `npm install -h`
	+ npm 帮助

---

### 1 `npm init 项目初始化`
- npm init 生成项目包文件， `package.json`
- 填写项目依赖包信息
	1. npm自动生成`packapge.json`，亦可以手动创建 `package.json`并输入相关信息
	2. 在package.json 的 dependencies 中填写当前项目用到的第三方包，以及对应的版本
	3. 使用 `npm update` 进行更新，npm 自动会根据dependencies里面的值，自动安装对应的更新包

- `npm install 包名称 --save`
    + `npm install gulp --save` ，信息保存到 `dependencies`
	+ dependencies  （**项目依赖**）,项目运行需要用到的 - 开发环境
	> `--save` 下载安装包并把这个包的信息（名称和版本号）加入到当前项目的package.json文件的 `dependencies` 对象中，方便管理和维护

- `npm install 包名称 --save-dve`
    + `npm install gulp --save-dev` ，信息保存到 `devDenpendencies`
	+ devDependencies （**项目开发依赖**）项目开发过程依赖的包，但是项目运行的时候是不需要的
	```
	dependencies:{
		"jquery":"^1.7.2"
	},
	dependencies: {
		"jquery": "^1.7.2"
	}
	```
	+ ^ 表示：
		大于后面的版本号，并且大版本要一致
	+ ~ 表示：
		前2位需要一致，后面一位版本可以不同
	+ 什么都不写，精确匹配
---


## node 服务器 http-server
- `npm install http-server -g`
	+ http-server src -p 指定一个新的端口
	```
	http-server src -p 8888
	```




# 回调 & 异步 & IO


## 什么是回调？
* 符合后续逻辑作为函数参数中，作为起始函数的参数



## 同步 & 异步
1. 同步
	* 发起调用之后主线程只能挂起
	* 调用者主动等待这个调用的结果

2. 异步
	* 发起调用之后主线程可以做别的事情
	* 被调用者通过通知来告知调用者结果



## 阻塞 & 非阻塞
* 针对内核来说的
* 向内核发起请求的时候不会阻塞主线程的执行
* 非阻塞是实现异步的前置条件



## IO
* input & output
* input 输入，从文件系统中读取文件
