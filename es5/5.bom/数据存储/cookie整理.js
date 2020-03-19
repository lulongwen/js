
/* Create or update a cookie */
function setCookie (cookieName, cookieValue, expdays) {
  var d = new Date()
  d.setTime(d.getTime() + (expdays * 24 * 60 * 60 * 1000))
  var expires = '; expires=' + d.toUTCString()
  document.cookie = cookieName + '=' + cookieValue + expires
}

/* Get cookie value
    undefined is returned if the cookie is not available */
function getCookie (cookieName) {
  var name = cookieName + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }

  return undefined
}

/* Delete a cookie */
function deleteCookie (name) {
  setCookie(name, '', -1)
}

/* Check if username cookie is already created. If not, ask user for the value and create a cookie. */
function checkCookie () {
  var username = getCookie('username')
  if (username) {
    alert('Welcome: ' + username)
  } else {
    username = prompt('Please enter your user name:', '')
    if (username !== '' && username !== null) {
      setCookie('username', username, 365)
    }
  }
}

function read (key) {
  if (!key || !_has(key)) { return null }
  var regexpStr = '(?:^|.*;\\s*)' +
    escape(key).replace(/[\-\.\+\*]/g, '\\$&') +
    '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
  return unescape(doc.cookie.replace(new RegExp(regexpStr), '$1'))
}

function each (callback) {
  var cookies = doc.cookie.split(/; ?/g)
  for (var i = cookies.length - 1; i >= 0; i--) {
    if (!trim(cookies[i])) {
      continue
    }
    var kvp = cookies[i].split('=')
    var key = unescape(kvp[0])
    var val = unescape(kvp[1])
    callback(val, key)
  }
}

function write (key, data) {
  if (!key) { return }
  doc.cookie = escape(key) + '=' + escape(data) + '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/'
}

function remove (key) {
  if (!key || !_has(key)) {
    return
  }
  doc.cookie = escape(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
}

function clearAll () {
  each(function (_, key) {
    remove(key)
  })
}

function _has (key) {
  return (new RegExp('(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(doc.cookie)
}
