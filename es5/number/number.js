/**
	全局函数 isNaN() 检测一个值是不是 NaN
	isNaN() 函数用于检查其参数是否是非数字值
*/ 

// 判断可不可以转数字
function(str, num=2) {
	if (isNaN(str)) return str
	return (str*1).toFixed(num)
}


isNaN(NaN)   // true
isNaN('ok23') // true
isNaN('23ok') // true
isNaN('23')  // false


// Number.isNaN() 是否包含数字，有数字就为 false, 推荐 Number.isNaN()
Number.isNaN(NaN)   // true
Number.isNaN('ok23')// false
Number.isNaN('23ok')// false
Number.isNaN('23')  // false



// String 转换为 Number 的方式

Number('2,000.00') // NaN
parseInt('2,000.00') // 2
parseFloat('2,000.00') // 2
	

"1.23" * 1 //  1.23
"0xFF" - 0 //  255
"0xFF.jpg"/ 1 //  NaN
+"023" //  23


// 按位非
~~1.23 //  1
~~"1.23" //  1
~~"23" //  23
~~"Hello world" //  0

'200.00' * 1  // 200
'2,000.00' * 1 // NaN

'200.00'- 0  // 200
'200.00' / 1 // 200
+'200.00'  // 200


parseFloat('44.jpg') //  44
parseInt('08') // 8  【0老浏览器】
parseInt('44.jpg') //  44