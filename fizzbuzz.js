// fizzbuzz program

let fizzbuzz =(n)=>{
    if(n % 3 === 0 && n % 5 === 0)
    {
        return 'fizzbuzz';
    }
    if(n % 3 ===0 )
    {
        return 'fizz';
    }
    if(n % 5 ===0 )
    {
        return 'buzz';
    }
} ;
console.log(fizzbuzz(15));