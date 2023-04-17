// const { NotImplementedError } = require('../extensions/index.js');

// /**
//  * Create transformed array based on the control sequences that original
//  * array contains
//  * 
//  * @param {Array} arr initial array
//  * @returns {Array} transformed array
//  * 
//  * @example
//  * 
//  * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
//  * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
//  * 
//  */
// function transform(arr) {
//   if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  
//   let resultArr = arr.slice();
//   let strCount = arr.reduce((acc, currentValue) => {
//     return ((typeof(currentValue) === "string") ? ++acc : acc);
//   }, 0)

//   for(let i = 0; i < strCount; i++){

//       console.log(`strCount - ${strCount}`);
//       console.log(`${i}й круг`);
//       console.log(`arr[${i}] - ${arr[i]}`);
//       console.log("resultArr в начале круга - " + resultArr);

//       let command = resultArr.find((el) => typeof(el) === "string");
//       console.log(`command - ${command}`);

//       switch (command) {
//           case "--discard-next":
//               discardNext(resultArr);
//               console.log("resultArr в после изменения - " + resultArr);
//               break;

//           case "--discard-prev":
//               discardPrev(resultArr);
//               console.log("resultArr в после изменения - " + resultArr);
//               break;

//           case "--double-next":
//               doubleNext(resultArr);
//               console.log("resultArr в после изменения - " + resultArr);
//               break;

//           case "--double-prev":
//               doublePrev(resultArr);
//               console.log("resultArr в после изменения - " + resultArr);
//               break;
      
//       }
//   }

//   function discardNext (array) {
//       // if(arr[arr.indexOf('--discard-next') + 2] === "--discard-prev") return array.splice(array.indexOf('--discard-next'), 1);
//       if(arr.indexOf('--discard-next') < array.length - 1) {
//           return array.splice(arr.indexOf('--discard-next'), 2);
//       } else return array.splice(arr.indexOf('--discard-next'), 1);
      
//   }
//   function discardPrev (array) {
//       if(arr[arr.indexOf('--discard-prev') - 2] === "--discard-next") return array.splice(array.indexOf('--discard-prev'), 1);
//       if(arr.indexOf('--discard-prev') > 0) {
//           return array.splice((arr.indexOf('--discard-prev') - 1), 2);
//       } else return array.splice(arr.indexOf('--discard-prev'), 1);
      
//   }
//   function doubleNext (array) {
//       // if(arr[arr.indexOf('--double-next') + 2] === "--discard-prev") return array.splice(array.indexOf('--double-next'), 1);
//       if(arr.indexOf('--double-next') < array.length - 1) {
//           return array.splice(arr.indexOf('--double-next'), 1, array[arr.indexOf('--double-next') + 1]);
//       } else return array.splice(arr.indexOf('--double-next'), 1);
      
//   }
//   function doublePrev (array) {
//       // console.log(arr);
//       // console.log(`индекс элемента --double-prev: ${arr.indexOf('--double-prev')}. На 2 позиции левее стоит элемент ${arr[arr.indexOf('--double-prev') - 2]}`)
//       if(arr[arr.indexOf('--double-prev') - 2] === "--discard-next") return array.splice(array.indexOf('--double-prev'), 1); 

//       if(arr.indexOf('--double-prev') > 0) {
//           return array.splice(arr.indexOf('--double-prev'), 1, array[(arr.indexOf('--double-prev'))-1]);
//       } else return array.splice(arr.indexOf('--double-prev'), 1);
//   }

//   return resultArr;

// }

// module.exports = {
//   transform
// };


                                                                //new solution
const { NotImplementedError } = require('../extensions/index.js');

/**
* Create transformed array based on the control sequences that original
* array contains
* 
* @param {Array} arr initial array
* @returns {Array} transformed array
* 
* @example
* 
* transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
* transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
* 
*/
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  } else if (arr.length == 0) {
    return arr;
  }
  var a = arr.slice();

  for(let i = 0; i < a.length; i++){
    if (a[i] === '--discard-next'){
      if (a[i + 1] !== undefined && (a[i + 2] !== '--discard-prev' || a[i + 2] !== '--double-prev')){
        a[i] = 'miss', a[i + 1] = 'miss';
      } else {a[i] = 'miss'}
    } else if (a[i] === '--discard-prev'){
      if(a[i - 1] !== undefined){
        a[i] = 'miss', a[i - 1] = 'miss'
      } else {a[i] = 'miss'} 
    } else if(a[i] === '--double-next'){
      if(a[i + 1] !== undefined){
        a[i] = a[i + 1];
      } else {a[i] = 'miss'}
    
    } else if(a[i] === '--double-prev'){
      if (a[i-1] !== undefined){
        a[i] = a[i - 1];
      } else {a[i] = 'miss'}
    }
  }

  return a.filter((item) => item != 'miss');
}

module.exports = {
    transform
};
