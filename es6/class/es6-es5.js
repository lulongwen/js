"use strict"

function _typeof(obj) {
  "@babel/helpers - typeof"
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    }
  }
  return _typeof(obj)
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) { return call }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }
  return self
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o)
  }
  return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function")
  }
  // 继承父类的 prototype 公共方法
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  })
  
  // 继承父类的静态方法
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
  // 如果有 setPrototypeOf方法，否则用 _proto__ 继承
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p
    return o
  }
  return _setPrototypeOf(o, p)
}

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left) } else { return left instanceof right }
}

function _classCallCheck(instance, Constructor) {
  // 判断当前构造函数中的 this是不是当前构造函数的实例
  if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function") }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ("value" in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

var Person = /*#__PURE__*/function () {
  function Person(age) {
    _classCallCheck(this, Person)
    
    this.age = age
    this.type = 'person'
  }
  
  _createClass(Person, [{
    key: "say",
    value: function say() {
      console.log("".concat(this.type, " is old ").concat(this.age))
    }
  }], [{
    key: "eat",
    value: function eat() {
      console.log('eat something')
    }
  }])
  
  return Person
}() // extends 继承实例上的属性和 prototype


var Child = /*#__PURE__*/function (_Person) {
  _inherits(Child, _Person)
  
  // 写了 constructor 就必须写 super
  function Child(age, learn) {
    var _this
    
    _classCallCheck(this, Child)
    
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, age))
    _this.learn = learn
    return _this
  }
  
  return Child
}(Person)

var p1 = new Child(20, 'english')
p1.say()
console.log(p1)
