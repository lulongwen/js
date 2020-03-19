
// const url = window.location.search;
const url = '/api/manager/stock/search?warehouse=3&material=24&location=6'

urlParams(url, 'warehouse') // 3
function urlParams (str, attr) {
  if (!str) return

  let queryString = str.split('?')[1] || ''
  let arr = queryString.split('&') || []
  for (let i = 0, length = arr.length; i < length; i++) {
    // 对编码后的 URI进行解码
    let key = decodeURIComponent(arr[i].split('=')[0])
    let value = decodeURIComponent(arr[i].split('=')[1])

    return (attr === key) ? value : ''
  }
}
