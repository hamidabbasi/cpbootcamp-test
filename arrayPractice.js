let numbers = [23,43,5342,2,1];
let sortedArray = numbers.sort(function(a,b){
    return a - b;
});
console.log("Sorted Array is : " + sortedArray);
// sorting through arrow function 
let numbersArrow = [4, 2, 5, 1, 3];
numbersArrow.sort((a, b) => a - b);
console.log("Printing sorted array through arrow function " + numbersArrow);


// Getting Sum of the Array numbers 
let numbersArray = [1,2,3,4,5];

function sumOfArray(arr){

    let sum = 0;
    for(let i = 0; i < numbersArray.length;i++)
    {  
        sum += numbersArray[i];   
    }
    return sum;
}
console.log("Printing Sum of The Array through function practice : " + sumOfArray(numbersArray));


let arrayAbbasi = ['Hamid','Shahid','Zafir'];
arrayAbbasi.unshift('Tahir Abbasi');
arrayAbbasi.splice(1,0,'Sadaqa Tahir');
arrayAbbasi.push('jean');
arrayAbbasi.push('lori');
arrayAbbasi.pop();
arrayAbbasi.pop();
console.log(arrayAbbasi);



let isEighteen =() =>{
    let age = 17;
    if(age < 18)
    {
        console.log("Sorry you're not eligible for this game: ");
    }
    else{
        console.log("Welcome to your new Study session");
    }
    return age;
}
isEighteen();
