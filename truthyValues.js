const arrayValues = ['','undefined',1,2,3];
let truthyValues = (arr)=>{
    for(let i = 0 ; i <  arrayValues.length; i++)
    {
        let check;
        check = arrayValues[i];
        if(check==='' || check==='undefined' || check==='null'){
            console.log('falsy values');    
        }
     
    }
}
console.log(truthyValues(arrayValues));