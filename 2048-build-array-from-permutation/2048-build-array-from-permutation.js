/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
var ans = []
    for(let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]]
    }
    return ans
};