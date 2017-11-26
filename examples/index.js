const qqfaceParser = require('qqface-parser');

const faceStr = '/::)';

const imgStr = qqfaceParser(faceStr, './');

console.log(imgStr);  //  <img class="qqface" src="./weixiao.gif" alt="weixiao">
