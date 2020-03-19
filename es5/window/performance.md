# 前端性能监控：window.performance
	https://www.cnblogs.com/libin-1/p/6501951.html

window.mark.DATracker = DATracker;
window.mark.post();
window.addEventListener('load', function() {
if( this !== top ) return;// 不统计iframe
setTimeout(function(){ // loadEventEnd需要在下一个任务队列执行才有值
var time = window.performance && window.performance.timing;
if(!time) return;
var performance = {
'dns': time.domainLookupEnd - time.domainLookupStart, // DNS 查询时间connectEnd
'tcp': time.connectEnd - time.connectStart, // TCP 链接耗时
'request': time.responseEnd - time.requestStart, // request 请求耗时
'dom-parse': time.domInteractive - time.domLoading, // 完成HTML解析和dom树构建
'dom-complete': time.domComplete - time.domInteractive, //DOM CSSOM 和 所有资源准备就绪
'TTI': time.domContentLoadedEventEnd - time.navigationStart, // 用户可操作时间(Time to interact)
'load-event': time.loadEventEnd - time.loadEventStart,
};
if (window.performance.getEntriesByType && window.performance.getEntriesByType('paint').length > 1)
performance['TTSRchrome'] = window.performance.getEntriesByType('paint')[1].startTime; // chrome 白屏时间
else if (window.chrome && window.chrome.loadTimes) {
var loadTimes = window.chrome.loadTimes();
performance['TTSRchrome'] = loadTimes.firstPaintTime - loadTimes.startLoadTime; // chrome 白屏时间
} else if (time.msFirstPaint && time.navigationStart)
performance['TTSRie'] = time.msFirstPaint - time.navigationStart; // ie 9+ 白屏时间
if (window.performance.getEntries) {
var entries = window.performance.getEntries(), time = 0;
for(var i = 0; i < entries.length; ++i)
if(entries[i].responseEnd && entries[i].responseEnd > time) time = entries[i].responseEnd;
// 首屏时间取图片，文件和XHR时间返回的最大值
window.mark.add('sourcesFirstLoaded', time);
}
Object.keys(performance).forEach(function(key){
if(performance[key] > 0)
window.mark.add(key, performance[key]);
});
}, 0);
},false);