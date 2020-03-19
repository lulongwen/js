# Node.js
- 事件驱动，异步的非阻塞 I/O，是Node.js的精髓。
- 前端跑浏览器， 后端跑服务器 | 数据库

```
Node全栈
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

```


## 区分环境变量



## 什么是模块



## 模块的使用



## 安装 npm包



## 发布 npm包



## 核心模块


## promisify 异步函数

## 

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
