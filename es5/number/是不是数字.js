
// 是不是数字
function isNotaNumber (inputString) {
  return isNaN(inputString)
}

// 是不是整数
function isNumberInt (inputString) {
  return (!isNaN(parseInt(inputString)))
}

// 是不是浮点数
function isNumberFloat (inputString) {
  return (!isNaN(parseFloat(inputString)))
}
