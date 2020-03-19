
// 将时间转化为一个 number类型的值，即时间戳  1541660499303 
Number( new Date() );


// 通过原型的方法获取时间的毫秒值 1541660593913
new Date().getTime();


// valueOf函数返回指定对象的原始值，更准确的时间戳  1541660473526
(new Date()).valueOf();


// 毫秒级的时间戳被转化为 000，不推荐的用法  1541660458000
Date.parse( new Date() );



// 时间戳转时间  new Date(时间戳)
new Date(1541660473526)


// .toLocaleDateString()  不同的浏览器，转化效果是不一样的
(new Date()).toLocaleDateString()


// 推荐的用法
(function() {
  var dd = new Date(),
    y = dd.getFullYear(),
    m = dd.getMonth() + 1,
    d = dd.getDate();
  return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + dd.toTimeString().substr(0, 8);
})();



(function() {
  var dd = new Date(),
    y = dd.getFullYear(),
    m = dd.getMonth() + 1,
    d = dd.getDate();

  m = m.toString().padStart(2, 0)
  d = d.toString().padStart(2, 0)
  let time = dd.toTimeString().substr(0, 8)
  return `${y}-${m}-${d} ${time}`
})();



