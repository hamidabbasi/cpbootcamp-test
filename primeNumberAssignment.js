



/*
👉https://stackblitz.com/edit/web-platform-bofq85?file=index.js
👉 Write a function called sumPrimes
👉 Takes an argument of n
👉 Find all of the prime numbers up until a given
👉 Value, add them all together and return the results


let number = 5;
let flag = 0;
let sumPrimeNumbers = 0;
for(let i = 2; i < number; i++)
{
  if(number % 2 !==0){
    sumPrimeNumbers = number + sumPrimeNumbers;
  }
  if(number % 2 === 0)
  {
    flag = 1;
    break;
  }
}
if(flag ===0)
{
  console.log("Its prime number: " + number);
  console.log('Sum of  All prime numbers is : '+ sumPrimeNumbers);
}
else{
  console.log("its not prime number");
}
*/

function primeNumber(x){
    for(i = 2; i < x; i++)
    {
        if(x % i ==0)
        {
            return false;
        }
        
    }
    return true;
}
console.log(primeNumber(11));