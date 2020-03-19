# CORS 跨域请求的限制和解决方法

1. 浏览器有并发连接限制 6个
2. 浏览器的跨域限制，帮你拦截了跨域请求，终端 curl 没有这个限制
3. jsonp，利用了 `link.href`, `img.src`, `script.src`


## 1 跨域
* 跨域分为简单请求和复杂请求
1. 简单请求
  * 不需要发送Options嗅探请求，但是只能发送简单的get/head/post请求
  * 且不能自定义http的headers
  * 
2. 复杂请求
  * 包含preflighted请求和preflighted认证请求
  * 复杂请求在发送真正的请求前会提前发送一次Options请求（嗅探、预检请求）
  * XHR会根据返回的Access-Control-*等头信息判断是否有对指定站点的访问权限，检查该请求是否是可靠安全的
  * 如果options获得的回应是拒绝性质的（或者没有权限）返回405错误，会停止发送实际请求信息



## CORS 请求限制
* [cors-safelisted-request-header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)
* 允许方法 method
    * get
    * head
    * post
    
* 允许 Content-Type
    * text/plain
    * multipart/form-data
    * application/x-www-form-urlencoded

* 其他限制
    * [请求头限制 cors-safelisted-request-header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)
    * XMLHttpRequestUpload 对象没有注册任何事件监听器
    * 请求中没有使用 ReadableStream 对象


#### CORS 预请求验证
* CORS 预请求 ` Request Method: OPTIONS `


### 3 Cache-Control 缓存头

* 可缓存性
    * public
    * private
    * no-cache
    
* 到期
    * max-age=<seconds>
    * s-maxage=<seconds>
    * max-stale=<seconds>

* 重新验证
    * must-revalidate
    * proxy-revalidate
    * no-store 没有任何缓存
    * no-transform


### 4 Last-Modified 缓存验证

* Last-Modified 上次修改时间
* 配合 `If-Modified-Since` 或 `If-Unmodified-Since` 使用
* 对比上次修改时间，以验证资源是否需要更新


### Etag 更加严格的验证

* 数据签名
* 配合 `If-Match` 或 `If-Non-Match` 使用
* 对比资源签名，判断是否使用缓存


### 5 Cookie & Session

* 通过 `Set-Cookie` 设置，下次请求会自动带上
* 键值对形式，可以设置多个 cookie
* 关闭浏览器，就没有 cookie
* `max-age` 和 `expires` 设置 cookie 过期时间
* Secure 只在 https 的时候发送
    * 重要的数据，禁止通过 js 访问
* 设置 HttpOnly 无法通过 document.cookie 获取cookie

* cookie 访问域的限制
    * 不同域名的 cookie 是不能共享的，不能跨域的设置 cookie
* cookie 不等于 session

```jsx
response.writeHead(200, {
    'Content-Type': 'text/html',
    // 'Set-Cookie': 'id=12'
    // 'Set-Cookie': ['id=12', 'user=lucy', 'time=2000'], // 多个 cookie
    // 多个 cookie，设置过期时间
    'Set-Cookie': ['id=12; max-age=3', 'user=lucy', 'time=2000; HttpOnly'],
})
    'id=12; max-age=3' 设置 cookie 过期时间
    'time=2000; HttpOnly' HttpOnly 禁止 js 访问 cookie
```


### 6 Http 长连接

* Accept
* Accept-Encoding
* Accept-Language
* User-Agent

```jsx
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN, en, zh',
```


* Content
    * Content-Type
    * Content-Encoding
    * Content-Language
    



### 7 数据协商



### 8 Redirect

* 301 永久重定向
* 302 临时重定向
* 304 缓存，资源没有修改

### 9 CSP 内容安全策略

* Content-Security-Policy 
    * 限制资源获取
    * 报告资源获取越权
    * [Content-Security-Policy](https://developer.mozilla.org/zh-CN/docs/Glossary/CSP)
    * 用于检测和减轻用于 Web 站点的特定类型的攻击, 例如 XSS 和数据注入等

* 限制方式
    * ` default-src ` 限制全局
    * 制定资源类型，资源类型有

```jsx
    default-src
    script-src

    img-src
    style-src
    
    font-src
    frame-src
    media-src
    connect-src
    manifest-src
```


#### Content-Security-Policy 设置

```jsx
response.writeHead(200, {
    'Content-Type': 'text/html',

    // 只能用服务器的 js
    'Content-Security-Policy': 'default-src http: https:',

    // default-src 全局禁用
    'Content-Security-Policy': 'default-src \'self\' https://cdn.bootcss.com',

    // 限制 外部 JS链接，限制外部 form 提交
    'Content-Security-Policy': 'script-src \'self\'; form-action \'self\' ',
    // 
    'Content-Security-Policy': 'script-src \'self\'; form-action \'self\' ',

    // script-src 禁用 script, 向服务器报告，资源获取越权
    'Content-Security-Policy': 'script-src \'self\'; form-action \'self\'; report-uri /report',
    
})

```


























