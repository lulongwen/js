// 生成器
function read (data) {
	let index = 0

	return next () {
		let done = (index === data.length - 1)
		let value = done ? undefined : data[index++]

		return {done, value}
	}
}

var arr = ['node', 'js', 'css']

// 迭代器
var iterator = read([{name: 'lucy', title: 'good'}])



// 生成器函数和普通函数不一样，生成器函数带星号 * ，返回迭代器
// 执行的时候也不一样
function *read(arr) {
	console.log('start')

	for (let i = 0; i < arr.length; i++) {
		yield arr[i]
	}
}

var it = read(arr)
	it.next()