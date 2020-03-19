/**
	location.search

  location.search.substr(1)

  location.search.substr(1).split('&')[0].split('=')

	
  let protocol = 'https:' == document.location.protocol ? 'https://' : 'http://'

*/


// url 转对象
var str = 'http://www.zhufengpeixun.com/stu/?name=zxt&age=28&sex=0#teacher';
var result = queryURLParameter(str);

function queryURLParameter(url) {
    var inAsk = url.indexOf('?'),
        inWell = url.indexOf('#'),
        obj = {};
    //->容错:当前处理的URL中即没有?也没有#,直接返回空对象即可,不需要再做任何的处理
    if (inAsk === -1 && inWell === -1) return obj;

    //->有井号
    if (inWell > -1) obj['HASH'] = url.substring(inWell + 1);

    //->有问号
    if (inAsk > -1) {
        // var resAsk = '';
        // if (inWell > -1) {
        //     resAsk = url.substring(inAsk + 1, inWell);
        // } else {
        //     resAsk = url.substring(inAsk + 1, url.length);
        // }
        inWell === -1 ? inWell = url.length : null;
        var resAsk = url.substring(inAsk + 1, inWell);
        resAsk = resAsk.split(/=|&/g);
        //console.log(resAsk);//->["name", "zxt", "age", "28", "sex", "0"]
        for (var i = 0; i < resAsk.length; i += 2) {
            obj[resAsk[i]] = resAsk[i + 1];
        }
    }
    return obj;
}