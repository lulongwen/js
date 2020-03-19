// 编码
function htmlEncodeString (inputString) {
  return encodeURI(inputString)
}

// 解码
function htmlUnencodeString (inputString) {
  return decodeURI(inputString)
}
