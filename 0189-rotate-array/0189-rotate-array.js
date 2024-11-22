/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let newArr=[]
    let newArr1=[]
     k %= nums.length;
    let Arrlength=nums.length-k
    for(let i=Arrlength;i<nums.length;i++){
        newArr.push(nums[i])
    }
    for(let i=0;i<nums.length-k;i++){ 
        newArr.push(nums[i])
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = newArr[i];
    }
    return nums
};