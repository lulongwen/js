# Interface 接口

## 一 接口属性

1. 可选属性
2. 多余属性检查
3. 绕开属性检查
4. 只读属性


```ts

// interface nameInfo {
	first: string,
	last: string
}

const fullName = ({ first, last }: nameInfo): string => {
	return `${first} ${last}`
}

const fullName({
	first: 'da',
	last: 'bai'
})


// ? 可选属性 
interface Vegetable {
	color?: string,
	type: string
}

const getVegetable = ({color, type}: Vegetable) => {
	return `this is ${color ? color+' is' : '' }${type}`
}

getVegetable({ type: 'tomato })

```



## 二 参数

1. 函数类型
2. 索引类型


## 三 继承
1. 继承接口
2. 混合类型接口

```ts
interface Vegetable {
	color: string
}

// 继承父类
interface Tomato extends Vegetable {
	face: string
}

interface Carrot extends Vegetable {
	length: number
}

const tomato: Tomato = {
	color: 'red',
	face: 'soft'
}

const carrot: Carrot = {
	length: 30,
	color: 'pink'
}


// 混合类型接口
interface Mixed {
	(): void,
	count: number
}

const getMixed = (): Mixed => {
	const fn = () => { c.count++ }
	c.count = 100
	return c
}

const count = Mixed = getMixed()

```



