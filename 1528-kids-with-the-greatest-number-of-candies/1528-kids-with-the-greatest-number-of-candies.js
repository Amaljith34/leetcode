/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const MaxCandies=Math.max(...candies)
    const newArr=[]
    for(let i=0;i<candies.length;i++){
        newArr.push(candies[i]+extraCandies >= MaxCandies)
    }
    return newArr
};