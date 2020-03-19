var arr = [1,2,3,4,5,6, 'ok', 'good', 'best', 'fruit', {name: 'lucy', age: 20}]

function myRandom(a, b) {
	// 生成 0-1之间的随机数，如果大于0.5就不交换位置，否则交换位置
	return Math.random() > .5 ? -1 : 1
}

arr.sort(myRandom)



/**
	洗牌的功能
		每一次循环：从前 len - i 个元素里随机一个位置,
		将这个元素和第 len - i 个元素进行交换
		迭代直到 i = len - 1 为止

	index = Math.floor(Math.random() * (len - i))
*/

function shuffle(arr=[]) {
	if (!Array.isArray(arr) || !arr.length) return arr

	var len = arr.length, temp = null
	
	for(var i = 0; i < len-1; i++){
		// 从前 len - i 个元素里随机一个位置
    var index = Math.floor(Math.random() * (len - i))
    temp = arr[index]

    arr[index] = arr[len - i - 1]
    arr[len - i -1] = temp
  }
  return arr
}