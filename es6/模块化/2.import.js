// ES6 按需导入
import {circleArea} from './1.import.js'


// ES6 全部导入
import * as area from './1.import.js'


import Book from 'book.js'


// node 导入
const area = require('./1.import.js')


// 使用
area.circle(2)

var book = new Book('javascript')
  book.title