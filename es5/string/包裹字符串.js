
function wrapString (inputString, wrapLength, delimiter) {
  if (!delimiter) {
    delimiter = '\n'
  }

  if (!wrapLength) {
    wrapLength = inputString.length
  }

  var buildString = ''
  for (var i = 0; i < inputString.length; i += wrapLength) {
    buildString += inputString.slice(i, i + wrapLength) + delimiter
  }

  return buildString.slice(0, (buildString.length - delimiter.length))
}
