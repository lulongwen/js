/**
	encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
	encodeURIComponent("http://www.w3school.com.cn")
	"http%3A%2F%2Fwww.w3school.com.cn"

	encodeURIComponent("cookie编码值")
		"cookie%E7%BC%96%E7%A0%81%E5%80%BC"

	decodeURIComponent("cookie%E7%BC%96%E7%A0%81%E5%80%BC")
	"cookie编码值"

    encodeURI：适用于url跳转时。
  encodeURIComponent：适用于url作为参数传递时。
  当url作为参数传递时如果没有用encodeURIComponent进行编码，会造成传递时url中的特殊字符丢失
*/
encodeUrl : function(url){
  return encodeURIComponent(url);
  
},
decodeUrl : function(url){
return decodeURIComponent(url);  
  
},


//得到滚动条的scrollTop,scrollLeft
getScrollSize : function (){
	var screenInfo = {
	  'scrollTop' : document.documentElement.scrollTop || document.body.scrollTop,
	  'scrollLeft' : document.documentElement.scrollLeft || document.body.scrollLeft
	  
	};
	return screenInfo;
}

// 滚动条位置
getScrollOffsets : function(w){
  w = w || window;
  var obj = {};
  var sLeft,sTop;
  if(w.pageXOffset != null) {
          obj.sLeft = w.pageXOffset;
          obj.sTop = w.pageYOffset;
          return obj;
  }
  if(document.compatMode == "CSS1Compat"){
      obj.sLeft = document.documentElement.scrollLeft == 0 ? document.body.scrollLeft : document.documentElement.scrollLeft;
      obj.sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
      return obj; 
  }else if(document.compatMode == "BackCompat"){
      obj.sLeft = document.body.scrollLeft;
      obj.sTop = document.body.scrollTop;
     return obj;
  }
}