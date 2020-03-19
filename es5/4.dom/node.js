
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


//获得节点元素中最后一个节点
getLastNode : function(_obj){
  var _last = _obj.lastChild;
  while(_last.nodeType == 3){//如果是文本继续上一个兄弟节点
      _last = _last.previousSibling;
  }
  return _last;
}


//获取节点元素的上一个兄弟节点
getprevNode : function (_obj){
  var _prev = _obj.previousSibling;
  while(_prev.nodeType == 3){//如果是文本继续上一个兄弟节点
      _prev = _prev.previousSibling;
  }
  return _prev;
}

//得到所有的子节点
getAllChilds : function(_obj){
  var childs = _obj.childNodes;
  var childsArr=[];
  for(var i=0,len = childs.length;i<len;i++){
      if(childs[i].nodeType == 3 && /^\s+$/.test(childs[i].nodeValue)){//节点类型3，值是空白
          continue;
      }else{
          childsArr.push(childs[i]);
      }
  }
  return childsArr;
}


//得到元素节点中的第一个子节点
getFirstNode : function(_obj){
var _first = _obj.firstChild;
    while(_first.nodeType == 3){
        _first = _first.nextSibling;
        //从第一个从下循环
    }
    return _first;
}


//获取节点元素的下一个兄弟节点
getNextNode : function(_obj){
  var _next = _obj.nextSibling;
  while(_next.nodeType == 3){//如果是文本继续上一个兄弟节点
      _next = _next.nextSibling;
  }
  return _next;
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




