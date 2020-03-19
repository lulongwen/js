
function capitalizeWords (string) {
  var tmpStr, tmpChar, preString, postString, stringLen

  tmpStr = string.toLowerCase()
  stringLen = tmpStr.length

  if (stringLen > 0) {
    for (var i = 0; i < stringLen; i++) {
      if (i === 0) {
        tmpChar = tmpStr.substring(0, 1).toUpperCase()
        postString = tmpStr.substring(1, stringLen)
        tmpStr = tmpChar + postString
      } else {
        tmpChar = tmpStr.substring(i, i + 1)
        if (tmpChar === ' ' && i < (stringLen - 1)) {
          tmpChar = tmpStr.substring(i + 1, i + 2).toUpperCase()
          preString = tmpStr.substring(0, i + 1)
          postString = tmpStr.substring(i + 2, stringLen)
          tmpStr = preString + tmpChar + postString
        }
      }
    }
  }
  return tmpStr
}
