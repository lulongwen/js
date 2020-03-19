
// 推荐的用法
var arr = []
var arr =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var arr = new Array()
var arr = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

arr.length // 数组长度
arr[arr.length - 1] // 数组最后一个元素


// 二维数组
var arr = [
  [72, 75, 79, 79, 81, 81],
  [81, 79, 75, 75, 73, 73]
]

for (let i=0; i< arr.length; i++) {
  console.log('i', arr[i]);
}
