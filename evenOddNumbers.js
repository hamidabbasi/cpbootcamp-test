// evenOddNumbers

let evenOddNumbers = (n)=>{
    for(let i = 0; i <n; i++)
    {
        if(i % 2 === 0)
        {
            console.log(i,'even');
        }
        else{
            console.log('Odd',i);
        }
        }
};
console.log(evenOddNumbers(11));