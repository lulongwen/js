# express

## 1 express 知识点

1. 路由控制及路由原理
2. 获取请求的方法，请求头和请求体
    - send & sendFile 发送响应
    - 重定向实现页面跳转
3. Node中间件的原理和常用中间件的使用
    - 如何使用静态文件中间件
4. 使用 ejs & jade模板的原理
5. cookie & session原理及在项目中的应用


### express跨域设置

```js
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
})
```
