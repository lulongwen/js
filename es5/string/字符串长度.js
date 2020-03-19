
function stringLength (inputString) {
  return inputString.length
}

// 去掉空格的长度
function howManyWords (inputString) {
  return inputString.trim().split(/\s+/).length
}

// 最大长度
function maxLength (inputString, inputLength) {
  return (inputString.length <= inputLength)
}

// 最小长度
function minLength (inputString, inputLength) {
  return (inputString.length >= inputLength)
}

// 字符串到 浮点数
function stringToFloat (inputString) {
  return parseFloat(inputString)
}

// 字符串到整数
function stringToInteger (inputString) {
  return parseInt(inputString)
}
