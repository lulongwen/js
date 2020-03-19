let fs = require('fs')
let path = require('path')
let util = require('util')
let read = util.promisify(fs.readFile)

init()
async function init () {
  try {
    let data = await read(path.resolve(__dirname, '../data/age.txt'))
    console.log('data', data.toString())
  }
  catch (err) {
    console.log(err)
  }
}
