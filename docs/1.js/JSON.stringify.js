/*
	html
		<pre id="pre"></pre>

	const str = JSON.stringify(list, null, 2)
	pre.innerHTML = str
*/
const person = {
  sex: 'man',
  name: 'Tom',
  phone: [ 123, 456 ]
}


// 直接显示字符串
JOSN.stringify(person)


// 将一个json对象格式化显示出来，配合pre标签
JOSN.stringify(person, null, 2)


// 不显示某些字段，哪些字段不需要显示就返回undefined
// {sex: 'main', name: 'Tom'}
JOSN.stringify(person, function(k, v){
  if (k === 'phone') return undefined
  return v
}, 2)



// 只显示某些字段 {sex: 'main'}
JOSN.stringify(person, ['sex'], 2)



// 参考资料
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
