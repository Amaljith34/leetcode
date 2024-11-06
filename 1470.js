function fn(nums, n) {
    let lengthArr=nums.length
    let arr=[];
    let arr1=[];
    let result=[]
    if(lengthArr===2*n){
       for(i=0;i<n;i++){
         arr.push(nums[i])
       }
       for(i=n;i<lengthArr;i++){
              arr1.push(nums[i])
       }
    }
    for(i=0;i<n;i++){
       result.push(arr[i],arr1[i])
    }
    // console.log(result);
    return result
};
console.log(fn([2,5,1,3,4,7],3));

