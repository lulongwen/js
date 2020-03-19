/**
	在指定位置添加元素
		第一个参数 指定位置
		第二个参数 指定要删除的元素, 如果为0, 则追加
		第三个参数 要替换/添加的元素
*/
var array = [1,2,3,4,5]

array.splice(2, 0, "three")

console.log(array)

array.splice(1, 1, 'ok')