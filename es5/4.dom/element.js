
/**
	获取 class
	需要使用定义在 Object.prototype 上的方法 toString 作用对象的时候就是[Object String]，[Object Array]等
  //JavaScript 标准文档中定义: [[Class]] 的值只可能是下面字符串中的一个： Arguments, Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String.
  //这里我转化为小写

*/

function (obj,type){
  var my_class = Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
  //返回String,Number,Object等
  return obj !== undefined && obj !== null && my_class === type.toLowerCase();
}





//得到元素的样式值
getStyle : function(elem,styleName){
if(elem.style[styleName]){//内联样式
  return elem.style[styleName];
}
else if(elem.currentStyle){//IE
  return elem.currentStyle[styleName];
}
else if(document.defaultView && document.defaultView.getComputedStyle){//DOM
  styleName = styleName.replace(/([A-Z])/g,'-$1').toLowerCase();
  var s = document.defaultView.getComputedStyle(elem,null);
  return s && s.getPropertyValue(styleName);
}
else{//other,for example, Safari
  return null;
}
},
getEleById : function(obj_id){
return document.getElementById(obj_id);

},
//通过className得到元素
getEleByClass : function(className){
  if(document.getElementsByClassName){
      return document.getElementsByClassName(className);
  }else{
      var tag=document.getElementsByTagName("*");
      //遍历className
      var divs=[];
      for(var i=0;i<tag.length;i++){
          if(tag[i].className == className){
              divs.push(tag[i]);
          }
      }
      return divs;
  }
}



//移除某个元素
removeEle : function(obj){
    obj.parentNode.removeChild(obj);
    
},
//追加元素
addEle : function(obj,newObj){
    obj.appendChild(newObj);
},
//在元素之前插入一个元素
insertBeforeEle : function(obj,newNode){
    obj.insertBefore(newNode,obj);//要出入的节点和参照节点
}


//设置元素的属性值
setAttr : function(obj,attrName,attrVal){
  return obj.setAttribute(attrName,attrVal);
  
},
//得到元素的属性值
getAttr : function(obj,attrName){
  return obj.getAttribute(attrName);
}


//获取和设置内容（不含HTML标签）
getContent : function(obj,val){
if(document.all){
  //存在val就是返回内容支持IE
  if(val){
      obj.innerText=val;//IE
  }else{
      return obj.innerText;
  }
}else{
  if(val){
      obj.textContent=val;//IE
  }else{
      return obj.textContent;
  }
}
}



//客户区大小，可视区的大小document.documentElement.clientHeight(clientWidth)元素内容区域宽度加上左右（上下）内边距的宽度（高度）
    getviewport : function(){
        var view = {};
        if(document.compatMode == "BackCompat"){//IE7以下版本浏览器
            view.width = document.body.clientWidth;
            view.height = document.body.clientHeight;
        }else{
            view.width = document.documentElement.clientWidth;
            view.height = document.documentElement.clientHeight;
        }
        return view;
    }




//获得节点元素中最后一个节点
getLastNode : function(_obj){
  var _last = _obj.lastChild;
  while(_last.nodeType == 3){//如果是文本继续上一个兄弟节点
      _last = _last.previousSibling;
  }
  return _last;
}

//获取元素在屏幕上占用的可见空间，取得左和上偏移量offsetLeft,offsetTop
//元素的上边框到父元素的上内边框距离，左偏移量
getEleLeft : function(elem){
  var actLeft = elem.offsetLeft;
  var current = elem.offsetParent;//父元素（元素的引用放在offsetParent
  while(current != null){//父元素存在
      actLeft += current.offsetLeft;//左偏移量叠加
      current = current.offsetParent;//得到上一级的父元素
  }
  return actLeft;
  
},
getEleTop : function(elem){
  var actTop = elem.offsetTop;
  var current = elem.offsetParent;//父元素（元素的引用放在offsetParent
  while(current != null){//父元素存在
      actTop += current.offsetTop;//元素的上边框到父元素的上内边框距离
      current = current.offsetParent;//得到上一级的父元素
      
  }
  return actTop;
  
}


//得到元素到最外层的盒子的顶部距离和左边距离
    getTop : function(obj){
        var iTop = 0;
        while(obj) {
            iTop += Math.floor(obj.offsetTop);//向下取整
            obj = obj.offsetParent;
        }
        return iTop;
    },
    getLeft : function(obj){
        var ileft = 0;
        while(obj) {
            ileft += Math.floor(obj.offsetLeft);//向下取整
            obj = obj.offsetParent;
        }
        return ileft;
    },
    //获取窗口相对于屏幕左边和上边的距离
    getScreenSize : function(){
        var leftPos =(typeof window.screenLeft == 'number') ? window.screenLeft : window.screenX;
        var topPos =(typeof window.screenTop == 'number') ? window.screenTop : window.screenY;
        var objScreen = {
            'left':leftPos,
            'top':topPos
        };
        return objScreen;
    },
    //获取页面的窗口大小或页面大小(可视口大小)
    getPageSize : function(){
       var pageWidth = window.innerWidth,pageHeight = window.innerHeight;//移动设备上的可见视口
       if(typeof pageWidth != 'number'){
            if(document.compatMode == 'CSS1Compat'){
                pageWidth = document.documentElement.clientWidth;//对于移动的IE不支持可以采用这个属性
                pageHeight = document.documentElement.clientHeight;
                // 其他的浏览器中，这个属性是布局视口，渲染页面的实际大小。跟可视口不同，可见视口只是整个页面中的一小部分。其他的移动浏览器把布局视口的信息保存在document.body.clientWidth中，不会随着页面的变化而变化。

            }else{//兼容IE6
                pageWidth = document.body.clientWidth;
                pageHeight = document.body.clientHeight;
            }
       }
       var pageSize ={
           'pageWidth' : pageWidth,
           'pageHeight' : pageHeight
       };
       return pageSize;
    }


//得到或设置CSS属性值
get_set_css : function(obj,attrName,val){
  //判断是否是-的CSS属性
  if(attrName.indexOf("-") != -1){
      var attr=attrName.split("-");//分割为2半
      //margin-top变成marginTop
      attrName=attr[0]+attr[1].substr(0,1).toUpperCase()+attr[1].substring(1);
  }
  
  //存在val就是设置CSS属性
  if(val !== undefined){
      if(val == "float"){   
           if(document.all){
              obj.style.styleFloat=val;//IE的浮动属性
              return;
           }
           obj.style.cssFloat=val;//FF
           return;
      }
      obj.style[attrName]=val;
      return;
  }
  
  //返回获取的CSS属性
  if(document.all){//IE
      return obj.currentStyle[attrName];
  }else{//FF
      return getComputedStyle(obj,null)[attrName];
  }
}




