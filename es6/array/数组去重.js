
var arr = [1, 2, 3, 5, 1, 5, 7, 3]

// new Set() 去重
var arr2 = Array.from(new Set(arr))



// 最大值
var max = Math.max(...arr2)

// reduce 最大值
var max = arr2.reduce((a,b) =>{ 
	return b > a ? b : a
})



// 最小值
var min = Math.min(...arr2)

// sort 最小值
var max = arr2.sort((a, b) => {
    return a - b < 0
})
// 最小值
console.log(max[0])

// 最大值
console.log(max[max.length-1])