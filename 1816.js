const fun=function(s,k) {
    let str="";
    let newstr=s.split(' ')
    for(i=0;i<=k-1;i++){
        str=str+newstr[i]+" "
    }
  return str
    
};
console.log(fun("Hello how are you Contestant",4));
