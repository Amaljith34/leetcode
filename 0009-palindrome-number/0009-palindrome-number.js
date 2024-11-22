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
     if(nums==x){
      return true
        
     }
     else{
        return false
     }
        
    }
};