# package.json 文件说明

1. `npm init -y` 快速生成 `package.json`
2. json文件内是不能写注释的，开发版的json文件内请删除注释

```jsx
{
  "name": "gulp-demo", // 项目名称-必须
  "version": "1.0.0", // 项目版本-必须
  "description": "gulp命令", // 项目描述，搜索的时候有用，方便别人了解模块的作用
  "main": "gulpfile.js", // 入口文件
  "homepage": "www.lulongwen.com", // 项目主页，不建议填写
  
  // 定义脚本命令， key 是事件， value 是要执行的命令行
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [ // 项目关键词
    "gulp命令",
    "前端构建工具"
  ],
  "repository": {    // 代码存放地址 一般是github
    "type": "git",
    "url": "git@github.com:lulongwen/vue.git"
  },
  "author": "卢珑文", // 项目作者
  "license": "MIT", // 项目许可协议
  "devDependencies": { // 项目开发依赖的插件
    "gulp": "^3.9.1"
  },
  "dependencies": { // 项目上线依赖的文件
    "bulma": "^0.5.2"
  },
  "bugs": { // bug提交地址
    "url" : "https://github.com/owner/project/issues",
    "email" : "project@hostname.com"
  }
}
```
