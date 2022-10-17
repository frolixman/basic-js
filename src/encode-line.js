const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArr = str.split('');
  let count = 1;
  let tempArr = [];
  for (let i = 1; i < strArr.length; i++){
      if(strArr[i] === str[i-1]){
          count++;
          i === strArr.length-1 ? (tempArr.push(count), tempArr.push(strArr[i-1])) : true
      } else {
          count > 1 ? (tempArr.push(count), tempArr.push(strArr[i-1]), count = 1) : tempArr.push(strArr[i-1])
          i === strArr.length-1 ? tempArr.push(strArr[i]) : true
      }
  }
  return tempArr.join("");

}

module.exports = {
  encodeLine
};
