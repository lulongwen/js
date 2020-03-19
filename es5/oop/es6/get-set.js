
class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
}

var p = new Person('lucy')
  p.name // 'lucy'
  p.name = 'weiqing' // {_name: 'weiqing' }
  p._name = 'qingzanggaoyuan' // {_name: 'qingzanggaoyuan'}



var _name = Symbol()

class Person2 {
  constructor(name) {
    this[_name] = name
  }

  get name() {
    return this[_name]
  }

  set name(value) {
    this[_name] = value
  }
}

var p2 = new Person2('food')
  p2.name
  p2.name = 'pear'

  Object.getOwnPropertySymbols(p2)