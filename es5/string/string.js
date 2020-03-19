// repeat() 重复的次数
var long = 'abc'.repeat(100);


// templateLitreal() 创建一个模版函数
const templateLitreal = (val) => `good ${val.user}`;
templateLitreal({'user': 'have everything'});


// toLowerCase() & toUpperCase() 转换大小写
var res = 'FOOTBALL'.toLowerCase();
// football

var res = 'life is good'.toUpperCase();
// LIFE IS GOOD
    

// trim() 去掉前后空格
var res = '  abc d '.trim();
// abc d


// 正则返回一个新的字符串
var reg = /apples/gi;
var str = 'Apples are Big APPLES, and apples are juicy';
var res = str.replace(reg, 'oranges');
// "oranges are Big oranges, and oranges are juicy"

str.includes('u'); // true | false

		str.startsWith('l'); // true | false

		str.endWith('y'); // true | false