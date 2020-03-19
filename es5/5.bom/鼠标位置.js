
/* Returns coordinates of the mouse pointer relative to the current window, for the given mouse event.
   Example, onclick="coords = getMouseCoordinates(event)" or onmousemove="coords = getMouseCoordinates(event)"
*/
function getMouseCoordinates (event) {
  var x = (event.clientX) ? event.clientX : undefined
  var y = (event.clientY) ? event.clientY : undefined

  return { x: x, y: y }
}
