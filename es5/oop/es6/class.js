
class Book {
  constructor(title, pages, bin) {
    this.title = title
    this.pages = pages
    this.bin = bin
  }

  print() {
    return `printing_${this.bin}`
  }
}

var book = new Book('title', 'page', 'bin')
  book.title
  book.title = 'JS Full Stack' // 修改 title属性


// extends 继承
class ITbook extends Book {
  constructor(title, pages, bin, size) {
    super(title, pages, bin)
    this.size = size
  }

  watching() {
    return `watching to ${this.size}`
  }
}


// 
var js = new ITbook('Javascript', 300, '9087989', '扉页第一章')
  js.title
  js.watching()

