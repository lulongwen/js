/**
 * window.navigator 浏览器相关信息
 */

  const navigator = window.navigator
  const ua = navigator.userAgent

  // -1 表示没找到
  const IE = ua.indexOf('MSIE' >= 1)
  const FIREFOX = ua.indexOf('FIREFOX')

