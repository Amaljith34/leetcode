
 function fn(nums1, nums2) {
    let arr=[]
    for(i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
              arr.push(nums1[i])
            }
        }
    }
    return [...new Set(arr)];
};
console.log(fn([1,2,2,3,1],[2,3,2]))