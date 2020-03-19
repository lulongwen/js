
var target = {a:1, b: 2, c: 3}

var obj = {a:'ok', b: '2323', c: 'dodd', d: '123', e: 123123}


// 浅拷贝
function merge(target, ...obj) {
	const temp = {}
	Object.keys(target).forEach(key => {
		temp[key] = obj[key]
	})

	return temp
}

var obj2 = merge(target, obj)