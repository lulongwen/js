
function bubbleSort (theArray) {
  var i, j
  for (i = theArray.length - 1; i >= 0; i--) {
    for (j = 0; j <= i; j++) {
      if (theArray[j + 1] < theArray[j]) {
        var temp = theArray[j]
        theArray[j] = theArray[j + 1]
        theArray[j + 1] = temp
      }
    }
  }
  return theArray
}
