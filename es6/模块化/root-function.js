/**
 * root 因为直接调用所以this是全局对象,浏览器环境为window，node环境为global
 */
;(function(root, factory) {
  'use strict'
  if (typeof define === 'function' && define.amd) {
    // 使用 require.js，加载第三方模块
    define('ajax', factory)
  }
  else if (typeof exports === 'object') {
    // 使用 sea.js
    exports = module.exports = factory()
  }
  else {
    // 这里的 root === window，绑定到全局变量上
    root.ajax = factory()
  }

})(this, function() {
  let _window = this || {}
  let _navigator = typeof navigator != 'undefined' ? navigator : {}
  let _mime = function(option, vlaue) {
    let mimeTypes = navigator.mimeTypes
    for (let key in mimeTypes) {
      if (mimeTypes[key][option] === value) return value
    }
    return false
  }
})