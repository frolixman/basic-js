const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digitArr = String(n).split('');
  let tempArr = [];
  let arr = [];
  for(i = 0; i < digitArr.length; i++){
      tempArr = Array.from(digitArr);
      tempArr.splice(i, 1);
      arr.push(tempArr.join(''))
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
