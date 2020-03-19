
// 不包含数字
function noNumbers (inputString) {
  var searchForNumbers = /\d/
  return (searchForNumbers.test(inputString) === false)
}

// 只有数字
function onlyNumbers (inputString) {
  var searchForNonNumbers = /\D+/
  return (searchForNonNumbers.test(inputString) === false)
}

// 数字转字符串
function numberToString (inputNumber, base) {
  var prefix = ''

  if (!base) {
    base = 10
  } else if (base === 8) {
    prefix = '0'
  } else if (base === 16) {
    prefix = '0x'
  }

  return (prefix + inputNumber.toString(base))
}
