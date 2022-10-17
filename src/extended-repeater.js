const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator ? options.separator : "+"
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let addition = options.addition === undefined ? "" : options.addition;
  console.log(repeatTimes);
  console.log(additionRepeatTimes);
  console.log(addition);

  let strArr = [];
  let resultArr = [];
  for (j = 0; j < additionRepeatTimes; j++) {
      strArr.push(String(addition));
  }
  for(i = 0; i < repeatTimes; i++) {
      resultArr.push(String(str) + strArr.join(String(additionSeparator)))
  }

  return resultArr.join(String(separator));
}

module.exports = {
  repeater
};
