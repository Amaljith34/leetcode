// var palindromnumber = function (nums) {
//   let reviseArr = [];
//   if (nums < 0) {
//     return false;
//   } else {
//     let sortedArr = nums.toString().split("").map(Number)
//     for (i = sortedArr.length - 1; i >= 0; i--) {
//       reviseArr.push(sortedArr[i]);
//     }
//     if (nums.join('') == reviseArr.join('')) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
// console.log(palindromnumber([-121]));


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0){
      return false
  }   
  else{
      let nums=x.toString().split('').reverse().join('')
   console.log(nums);
   if(nums===x){
    return true
   }
   else{
      return false
   }
      
  }
};
