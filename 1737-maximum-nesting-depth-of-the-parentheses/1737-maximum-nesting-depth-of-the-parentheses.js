/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let maxCount = 0;
    for(let i=0;i<s.length-1;i++){
        if(s[i] === "(" ) {
            count++;
        }else if(s[i] === ")"){
            count--;
        }else{
            continue;
        }
        maxCount = Math.max(maxCount,count);
    }
    return maxCount;
};