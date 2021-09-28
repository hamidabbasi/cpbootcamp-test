const factrorial = (n)=>{
 if(n===1){
     return 1;
 }
  return n * (factrorial(n-1));

}
console.log(factrorial(5));