# Symbol 类型

1. symbol 属性名
2. symbol 属性遍历
3. symbol.for
4. symbol.keyFor
5. 11个内置的值


## symbol 特点

1. symbol 唯一的值
2. 不能和其他类型值做运算



## symbol 属性

[symbol]

```ts
const s1 = Symbol('name')

const info = {
	[s1] = 'lucy',
	age: 18,
	like: 'food'
}

info[s1] = 'ok'

// for in 获取不到 symbol，以下方法都获取不到 symbol属性
for (let key in info) {
	console.log(key) // age, like
}

Object.keys(info)

Object.getOwnPropertyNames(info)

JSON.stringify(info)

```



## 获取 symbol的方法

```ts
Object.getOwnPropertySymbols()

Reflect.ownKeys()

```



## symbol.for

1. 全局搜索，全局包括 iframe， serviceWorkder

```ts
const s2 = Symbol.for('lucy')
const s3 = Symbol.for('lucy')
const s5 = Symbol.for('good')

s2 === s3 // true
s2 === s5 // false
```


## symbol.keyFor

```ts

```



## symbol 内置的方法

```ts
// hasInstance
const obj2 = {
	[Symbol.hasInstance] (obj) {
		console.log(obj)
	}
}
{a: 'ok'} instanceof <any>obj2


// isConcatSpreadable
let arr = [1, 2]
[].concat(arr, [3, 4])

arr[Symbol.isConcatSpreadable] = false // 不可扁平化
[].concat(arr, [3, 4])


```