// 分钟转小时
function minutesToHours (min) {
  var hrs = Math.floor(min / 60)
  min = min % 60
  if (min < 10) {
	  min = '0' + min
  }

  return hrs + ':' + min
}

// 分钟转秒
function minutesToSeconds (min) { return min *= 60 }


// 秒转分钟
function secondsToMinutes (sec) {
  var min = Math.floor(sec / 60)
  sec = sec % 60

  if (sec < 10) {
	  sec = '0' + sec
  }

  if (min < 10) {
	  min = '0' + min
  }

  return min + ':' + sec
}


// 秒转小时
function secondsToHours (sec) {
  var hrs = Math.floor(sec / 3600)
  var min = Math.floor((sec % 3600) / 60)
  sec = sec % 60

  if (sec < 10) {
	  sec = '0' + sec
  }

  if (min < 10) {
	  min = '0' + min
  }

  return hrs + ':' + min + ':' + sec
}


// 小时转秒
function hoursToSeconds (hrs) { return hrs *= 3600 }

// 小时转分钟
function hoursToMinutes (hrs) { return hrs *= 60 }
