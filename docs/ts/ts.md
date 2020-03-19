# TypeScript

```jsx

	tsc index.ts // 编译 ts -> js

	tsc index.ts --target es2015

	tsc index.ts --strictNullChecks // 


	// ts 项目结构
	git clone https://github.com/alexjoverm/typescript-library-starter.git

	// 关联项目
	git remote -V
	git remote add origin git@github.com:lulongwen.com

```

* 参考资料
	* ts高级类型 https://www.cnblogs.com/fe-linjin/p/11336586.html 


## 二 TypeScript是什么？

* 微软开发，拥有类型系统
* Typescript是 JS的超集，扩展了JS的语法
	* 超集意思是包含了JavaScript，遵循ES6语法规范
	* ES 是客户端脚本语言的规范，有ES5、ES6两个版本
	* javascript实现了 ES5，typescript实现了 ES6，提供最新和不断发展的 JavaScript 特性

* ES6 代码不加任何改动就可以在 Typescript 里面运行
* Typescript 需要编译才能运行
	* 最终变异成纯JS
* TypeScript通过 类型注解，提供编译时的静态类型检查
	
https://www.jianshu.com/p/4e7094d62b34



## TypeScript 常用语法
* 布尔值 :boolean
* 数字 :number
* 数组 
* 元组，数组 Tuple

* 枚举 enum
* :any
* :void
* null & undefined

* never
* object
* 类型断言 as

* 变量声明

* 类型注解
* 接口
* 类 
* 函数
* declare 声明 关键字

```jsx

// 类型注解
function person (user: string) {...}

// 接口
interface Person {
	firstName: string
	lastName: string
}

未来值不变的 用 const

// 数组
let list: number[] = [1,2,3]

let list: Array<number> = [1,2,3]


// 公共类，私有类，受保护的类
	private  私有
	protected
	public

箭头函数保存的是函数创建时的 this值
	this
	重载

泛型
	可重用型
	identity 适用于多个类型
	<T>
	泛型约束

```