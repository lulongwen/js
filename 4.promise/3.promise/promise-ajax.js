//
function Ajax (url='', type='get', dataType='json') {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(type, url, true)
    xhr.responseType = dataType
    
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      }
      reject('404')
    }
    
    xhr.onerror = err => {
      reject(err)
    }
    xhr.send()
  })
}

Ajax({ url: '../cart.json'})
.then(res => {
  console.log('res', res)
})
.catch(err => {
  console.log('err', err)
})
