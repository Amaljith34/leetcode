 function fn(nums){
    let sum=0
   for(i=0;i<nums.length;i++){
    if(i===0|| i%2===0){
        sum+=nums[i]
    }
    else{
        sum-=nums[i]
    }
   }
   return sum
}
console.log(fn([5,2,1]));
