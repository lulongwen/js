
function removeExtraSpaces (string) {
  var returnString = ''
  var stringArray = string.split(/\s+/)

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== '') {
      if (i === stringArray.length - 1) {
        returnString += stringArray[i]
      } else {
        returnString += stringArray[i] + ' '
      }
    }
  }
  return returnString
}

function removeLeadingWhitespace (inputString) {
  if (typeof inputString === 'string') {
    var firstNonWhite = inputString.search(/\S/)
    if (firstNonWhite !== -1) {
      inputString = inputString.substring(firstNonWhite)
    }
  }

  return inputString
}

function removeLeadingAndTrailingWhitespace (inputString) {
  if (typeof inputString === 'string') {
    var firstNonWhite = inputString.search(/\S/)
    if (firstNonWhite !== -1) {
      for (var i = inputString.length - 1; i >= 0; i--) {
        if (inputString.charAt(i).search(/\S/) !== -1) {
          inputString = inputString.substring(firstNonWhite, i + 1)
          break
        }
      }
    }
  }
  return inputString
}

function removeTrailingWhitespace (inputString) {
  if (typeof inputString === 'string') {
    for (var i = inputString.length - 1; i >= 0; i--) {
      if (inputString.charAt(i).search(/\S/) !== -1) {
        inputString = inputString.substring(0, i + 1)
        break
      }
    }
  }
  return inputString
}
