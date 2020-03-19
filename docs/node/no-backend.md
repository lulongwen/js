# noBackend 前端优先的开发模式

- https://www.csdn.net/article/2013-05-13/2815260-nobackend-dev
- https://segmentfault.com/a/1190000000403869
- firebase.google.com 
- leancloud.cn
- apicloud

后端：数据库，架构，业务，数据接口等

前端 组件化，页面功能，交互
  - 真正优秀的前端应该具备的能力是 能够高质量交付好的用户体验
  - 从后端到终端用户需求的满足，是AI无法判断的，这个需要有经验的前端去完成。

1 这个东西是什么
2 应用场景，使用范围
3 技术组合

## 2 编程思想
1. 范式编程
2. 面向对象编程 jquery
3. 面向数据编程 Vue
4. 面向资源编程 RESTful



## 3 前后端分离
- 让前端人员与后端人员的开发工作相互独立，减少耗时
- 思路： 前端人员 mock数据接口，
	Mock 客户端伪造数据的方法
	JSon文件的方式就是最简单的 mock行为，缺点，要自己写，效率低
	mock.js 是生成随机数据，拦截 ajax请求， 缺点：无法持久化数据

- 实践：
	实现约定好接口的标准， 契约精神
	后端开发接口
	前端通过 假数据的方式模拟一个后端接口



## RESTful API
1. 面向资源编程
2. 资源指的就是一类数据
	+ 产品表，就是产品资源
3. 重要的是如何表示一个资源
	+ 地址即资源，用地址来描述资源
	```
	http://api.demo.com/users    就是所有的用户数据
	http://api.demo.com/products 所有的产品数据
	http://api.demo.com/roles  所有的角色

	对于资源我们代码中可能操作的只有增删改查
	在http协议中对每一个请求URL都会有不同的操作
	谓词 包含了增删改查
		get 查
		post 新增
		put 整体更新
		patch 修列示更新
		delete 删除
	```


## 什么是 RESTful架构
1. 每一个URI代表一种资源；
2. 客户端和服务器之间，传递这种资源的某种表现层；
3. 客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"。

# RESTful 参考资料
- http://www.ruanyifeng.com/blog/2011/09/restful


## RESETful 实现
```
npm i faker json-server -g

npm i faker -D
npm i lodash -S

```



## JSON Server
- get a full fake REST API with zero coding in less than 30 seconds, seriously
	+ 提供一种零编码的方式在30秒内完成一个 RESTAPI

- JSON Server中 json文件中每一个属性都是一个资源，最终会被 JSON Server管理
	+ 可以用 Postman测试请求接口

- 使用 JSON Server之前要：明确数据契约
	+ endpoint 就是 API接口的接入点，可以理解成一种资源标识符
	+ 每个 endpoint的 action，针对每个 endpoint的操作有哪几种
	+ 每个 action的 params，每个参数的名字，格式，类型


json-server -jwt
	https://github.com/zce/dashboard-server
	dashboard https://github.com/zce/dashboard
	https://github.com/yxl720/vue-koa2-token

	http://www.yxlblog.com/plus/view.php?aid=688
