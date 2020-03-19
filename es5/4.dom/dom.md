# DOM Document Object Module 文档对象模型

1. Document Object Module的缩写
2. DOM是对XML文档的内容进行表示的模型，DOM把XML文档看作是一系列的 node和node（节点）之间的关系，并且把每一个node（节点）都当做是一个对象，所以叫做文档对象模型。

3. DOM提供了一系列的方法（API），允许开发人员添加，编辑，移动或删除树中的任意未知的节点，从而创建一个应用程序

4. 网页中，把DOM理解为网页中各个元素关系的描述
  * 每个元素或文本都可以看作是一个节点，即 node
  * 关系是指每一个节点之间是兄弟关系还是父子等关系
  * 每个网页元素或一段文字，都是一个可操作的对象
  * DOM操作就是 关系操作
  * 空格，回车，都属于文本节点


## DOM获取节点

1.通过 document获取节点
```jsx

  getElementById

  getElementByName

  getElementByTagName

  getElementByClassName

  querySelector

  querySelectorAll
```

2. 通过节点指针获取节点，节点属性索引
```jsx
  Node

  nodeValue

  nodeName

  nodeType

  childNodes

  Children

  nodeList

  parentNode

  previousSiblings

  nextSibling

  firtstChild

  lastChild

```

3. 节点信息索引
```jsx
          名称 nodeType   nodeName     nodeValue
  Element 元素 1 标签名

  Attribute 属性 2

  Text    文本   3

  Comment 注释   8

  Document 文档  9

  Fragment 文档碎片 11
```

- DOM 方法总结
- https://blog.csdn.net/fanfan_h/article/details/90632127


## DOM 盒模型



## DOM 操作样式



## DOM的回流和重绘
