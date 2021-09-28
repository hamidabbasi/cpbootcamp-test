let students = {
    name: 'hamid',
    stdid: 1
};
for(let key in students)
{
    console.log(key,students[key]);
};

//fizzbuzz challenge

function fizzbuzz(input)
{
    if(typeof input !== 'number')
    {
        console.log('not a number');
    }
    if(input % 3 === 0 && input % 5 === 0)
    {
        console.log('fizzbuzz');
    }
    else if( input % 3 ===0)
    {
        console.log('fizz');
    }
    else if(input % 5 === 0)
    {
        console.log('buzz');
    }
}

console.log(fizzbuzz('10'));


function findMax(number)
{
    return Math.max(...number);
}
console.log(findMax(100,23,45,67,87));