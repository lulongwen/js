/**
 *  x ~ y : Math.round(Math.random()*(y-x) + x)
 *	0 ~ x : Math.round(Math.random()*x)
 *	1 ~ x : Math.ceil(Math.random()*x)||1
 *	0 ~ x-1 : Math.floor(Math.random()*x)
 */
function randomNumber (limit) {
  return Math.floor(Math.random() * limit)
}
