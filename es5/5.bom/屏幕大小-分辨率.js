
/* Returns viewport's width */
function getViewportWidth () {
  if (window.innerWidth) {
    /* Returns Window's width excluding toolbars/scrollbars */
    return window.innerWidth
  } else if (document.body && document.body.offsetWidth) {
    /* Returns viewable width of document,
including padding, border and scrollbar, but not the margin */
    return document.body.offsetWidth
  } else {
    return 0
  }
}

/* Returns window's height */
function getViewportHeight () {
  if (window.innerHeight) {
    /* Returns Window's height excluding toolbars/scrollbars */
    return window.innerHeight
  } else if (document.body && document.body.offsetHeight) {
    /* Returns viewable height of document,
including padding, border and scrollbar, but not the margin */
    return document.body.offsetHeight
  } else {
    return 0
  }
}

/* Returns screen's total height & width */
function getScreenResolution () {
  return {
    height: (screen.height) ? screen.height : undefined,
    width: (screen.width) ? screen.width : undefined
  }
}
