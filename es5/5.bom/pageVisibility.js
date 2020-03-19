/**
 * page Visibility API
 *  页面显示还是隐藏
 *  显示：我们正在看的页面
 *  隐藏： 我们没有看的页面，把浏览器最小化，所有的页面就都不可见了
 *  
 *  应用场景：
 *  一次可以打开好多标签页面来回切换着
 *  动画，视频，音频都可以在页面显示时打开，在页面隐藏时关闭
 */

document.addEventListener("visibilitychange", function(){
  // document.hidden 返回 boolean，true 页面课件，false 隐藏
  console.log(document.hidden)
  if(document.hidden){
      document.title ="hidden";
  }else {
      document.title = "visibile";
  }
})