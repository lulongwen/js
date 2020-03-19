
function randomBgColor () {
  var r, g, b
  r = decToHex(randomNumber(256) - 1)
  g = decToHex(randomNumber(256) - 1)
  b = decToHex(randomNumber(256) - 1)
  document.body.style.backgroundColor = '#' + r + g + b
}

// hex
var randomColor = Math.floor(Math.random() * 16777215).toString(16)
