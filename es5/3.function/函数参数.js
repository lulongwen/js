sum(3,5)

function sum(x=1, y=3, z=5) {
  return x + y + z
}

// es5代码
function sum(x, y, z) {
  if (x == undefined) x = 1;
  if (y == undefined) y = 2;
  if (z == undefined) z = 3;
  return x + y + z
}

// es5 代码
function sum() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  return x + y + z
}


var arr = [1, 2, 3]
sum(...arr) // 展开运算符

// es5 代码
sum.apply(undefined, arr)



var arr2 = [99, 88, ...arr]
// arr2  [99, 88, 1, 2, 3]

// 剩余参数
function restParams(x, y, ...z) {
  console.log(x, y, z)
}

// 1, 2, ["hello", true, 90]
restParams(1, 2, 'hello', true, 90)

// 剩余运算符 es5 代码实现，call(arguments, 2)
function restParams(x, y) {
  var z = Array.prototype.slice.call(arguments, 2)
  console.log(x, y, z)
}
