// <button class=btn>编辑</button>

;(function(root, factory) {
  'use strict'
  root.a = root.a || factory(JQuery)

})(this, function($) {
  function fn() {
    let $btn = $('.btn')
    this.name = 'miao'
    this.click = function() {
      $btn.css({color: '#90f', background: '#369'})
    }

    let self = this
    $btn.on('click', function() {
      console.log('button clicked')
      self.click()
    })
  }

  return new fn()
})