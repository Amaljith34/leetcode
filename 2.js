// function fn(first,second){
    
//     let top
//     if(first.length>second.length){
//          top=first
//     }
//     else{
//         top=second
//     }
//     let arr=[]
//     for(i=0;i<top.length;i++){

//        for(j=i;j<=i;j++){
//         if(first[i]!=undefined && second[i]!=undefined ){
//             let sum=first[i]+second[j]
//             arr.push(sum)
//         }
//         else{
//            arr.push(0)
//         }
//        }
      
//     }

//     return arr
// }
// console.log(fn([2,4,3], [5,6,4]));


function fn(a,b) {
    let arr=[]
    let c= parseInt(a.toString().split('').reverse().join('').replaceAll(',',''));
    let d= parseInt(b.toString().split('').reverse().join('').replaceAll(',',''));
   
    let result=c+d
    let finalans=result.toString().split('').reverse().join('')
    
    console.log(finalans);
    
}

fn([2, 4, 3],[5,6,4]); // Expected output: "452"

