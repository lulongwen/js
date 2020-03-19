/**
	sleep 休眠，自定义停留几秒钟
	
	实现思路：	
		核心代码是 setTimeout 定时器
		时间戳 <= 当前的时间戳 + 延迟的时间

*/


// 执行sleep(1000)之后，休眠了1000ms之后输出了 123
// 	while 循环的方式缺点很明显，容易造成死循
function sleep(ms) {
	let start = Date.now(), expire = start+ms

	while(Date.now() <= expire) { }
	return '123'
}
sleep(2000)



// primise 实现 sleep
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
sleep(1000).then(() => {console.log(123)})



// async 实现 延迟 2000ms 输出了
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
async function test() {
	let temp = await sleep(2000)
	console.log(32)
	return temp
}
test()




// Generate 函数

function* sleep(ms) {
	yield new Promise((resolve, reject) => {
		console.log(123)
		setTimeout(resolve, ms)
	})
}
sleep(2000).next().value.then(() => console.log('ok'))

