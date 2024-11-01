function fn(nums1, nums2) {
    let arr=[]
    for(i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
               arr.push(nums1[i])
            }
        }
    }
    if(arr.length===0){
        return '-1'
    }    
    else{
     let num=   arr.sort((a,b)=>a-b)
    //  return num[0]
     console.log(num[0]);
     
     
    }
};
fn([3,4,5,10,12,15,16,16,25,48,51,69,74,74,78,78,78,82,82,88],[3,8,9,10,13,16,24,25,27,29,34,39,55,62,70,80,83,87,92,94])