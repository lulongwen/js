
// const Lo = require('lodash');
var _ = require('lodash');

console.log('lodash', _)

let huahua = {
  name: 'huahua',
  height: 190,
  weight: 160
}

let xiaomi = {
  name: 'xiaomi',
  height: 190,
  weight: 130
}

let tutu = {
  name: 'tutu',
  height: 180,
  weight: 170
}

const users = [huahua, xiaomi, tutu]

var result = _.find(users, {name: 'xiaomi'});
  //  { name: 'xiaomi', height: 190, weight: 130 }

var result = _.findIndex(users, {name: 'tutu'}); // 2 下标

var result = _.filter(users, {name: 'huahua'});
  // [ { name: 'huahua', height: 190, weight: 160 } ]

var result = _.filter(users, user=> user.weight === 160);
  //  [ { name: 'huahua', height: 190, weight: 160 } ]

var result = _.map(users, 'weight');
  // [ 160, 130, 170 ]

  console.log('result',result)


