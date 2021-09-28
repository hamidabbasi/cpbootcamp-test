/*const listOfMovies = {
account: 'Jessy', 
  genres: ['Thriller', 'Drama', 'Anime', 'Comedy','Romance', 'Horror', 'Documentaries'],
favourites: [
      {
        title: 'Little Miss Sunshine',
        genre: 'Comedy',
        year: 2006
      }, 
      {
        title: 'Howl\'s Moving Castle',
        genre: 'Japanese animation',
        year: 2004
      }, 
      { 
        title: 'Aquaman',
        genre: 'Action',
        year: 2019
      },       
      {
        title: 'The Shape of Water',
        genre: 'Drama',
        year: 2017
      },
      { 
        title: 'Your name',
        genre: 'Japanese animation',
        year: 2017
      },
      { 
        title: 'Inception',
        genre: 'Action',
        year: 2010
      }, 
    ]
}
for(let i = 0; i < listOfMovies.length; i ++)
{
    console.log(i);
}
//console.log(listOfMovies);



*/
//console.log('hamid');
//let listOfMovies = {  
//}

function sum(a,b)
{
  let total = 0;
    for(value of arguments)
    {
      total += value; 
    }
    return total;
}
//console.log(sum(1+2+3+4+5+6+7+8+9));
console.log(sum(1,2,3,4,5,6,7,8,9));

// using REST OPERATOR IN FUNCTION

function sum2(...args)
{
  return args.reduce((a,b) => a + b );
}
console.log(sum2(1,2,3));

// antoher example
function sum3(discount,...prices)
{
  let total =  prices.reduce((a,b) => a + b );
  return total * (1 - discount);
}
console.log(sum3(0.1,10,15));

//functions default values example

function interest (principal, rate , years)
{
  rate = rate || 4.7;
  years = years || 35;
  
  return principal * rate / 100 * years;
}
console.log(interest(165000,4.7,35));


// is primenumber
/*
function sumPrimes(num) {
  let sum = 0;
  for (let j = 1; j <= num; j++) {
    if (isPrime(j)) {
      sum += j;
    }
  }
  return sum;
}
console.log(sumPrimes(7));
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= (n/2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5));
*/













/*
👉https://stackblitz.com/edit/web-platform-bofq85?file=index.js
👉 Write a function called sumPrimes
👉 Takes an argument of n
👉 Find all of the prime numbers up until a given
👉 Value, add them all together and return the results
*/

let number = 5;
let flag = 0;
let sumPrimeNumbers = 0;
for(let i = 2; i < number; i++)
{
  if(number % 2 !==0){
    sumPrimeNumbers = number + sumpri;
  }
  if(number % 2 === 0)
  {
    flag = 1;
    break;
  }
}
if(flag ===0)
{
  console.log("Its prime number");
  console.log('Sum of  All prime numbers is : '+ sumPrimeNumbers);
}
else{
  console.log("its not prime number");
}






function sumPrimes(num) {
  let sumOfPrime = 0;
  for (let j = 1; j <= num; j++) {
    if (isPrime(j)) {
      sumOfPrime += j;
    }
  }
  return sumPrimes;
}


function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= (number/2); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
sumPrimes(3);













































