
function replaceCharacters (conversionString, inChar, outChar) {
  var convertedString = conversionString.split(inChar)

  convertedString = convertedString.join(outChar)

  return convertedString
}
