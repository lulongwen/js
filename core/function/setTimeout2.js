"use strict"
// setTimeout 实现 setInterval 编译 es5
function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return !!right[Symbol.hasInstance](left)
  }
  else {
    return left instanceof right
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
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

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer)
    
    this.id = null // 定时器的 ID
    
    this.fn = null // 需要被定时执行的函数
  }
  
  _createClass(Timer, [{
    key: "init",
    value: function init(fn, ms) {
      var _this = this
      
      if (!this.fn) this.fn = fn // 确保一个 Timer 实例只能重复一个 fun，如果不限制，只能清除掉最后添加进来的重复代码的定时器 ID
      
      if (this.fn !== fn) return // 要重复执行 b函数, 只能再实例化一个 Timer
      
      this.id = setTimeout(function () {
        fn()
        
        _this.init(fn, ms) // 递归调用
        
      }, ms)
    }
  }, {
    key: "clear",
    value: function clear() {
      clearTimeout(this.id) // this.fn = null
    }
  }])
  
  return Timer
}()

var j = 0
var timer = new Timer()
timer.init(function () {
  j++
  console.log(j)
  
  if (j > 3) {
    console.log('clear', timer)
    timer.clear()
  }
}, 1000)
