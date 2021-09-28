/*
for( let i = 0; i< 5; i++)
{
    console.log("Hello");
}

let i = 0;
while(i < 5)
{
    console.log("Hamid");
    i++;
}

let j = 0;
do
{
    console.log("Shahid");
    j++;
}
while(j< 5);    

let person = {
    name : "hamid",
    email : "icontechnology.abasi@gmail.com",
};
for(let key in person)
{   
    console.log(key,person[key]);   
}
    */

// Assignment making an array 
/* 
let companies = [
     ["tesla"]["innovation"],
     ["Amazon"]["ecommerce"],
     ["Disney"]["entertainment"],
   ];
 for(let i = 0; i < companies.length; i++)
 {
     //let listOfCompanies = companies[i];
     //console.log(listOfCompanies);
    for(let j = 0; j < companies[i]; j++)
    {
        console.log(companies[i][j]);
    }
}
*/
console.log(`

First Assignment printing companies name and their titles

`
);
let companies =[
    ["Tesla","innovation"],
    ["Amazon","ecommerce"],
    ["Disney","entertainment"],
];


for(let i = 0; i < companies.length; i ++)
{
    console.log(companies[i]);
    /*
    for(let j = 0; j< companies[i].length; j++)
    {
        console.log(companies[i][j]);
    }  
    */
}

// 2nd Assignment flatten the array

console.log(`



2nd Assignment multi dim Array printing as one array : 
-------------------------------------------------------------------`);
let array1 = [ [1,2,3],[4,5,6],[7,8,9] ];
console.log("Original array looks like this : [[1,2,3],[4,5,6],[7,8,9] ]" );
console.log("Result Array is down below: ");
let newArray =[];

for(let i = 0; i < array1.length; i++)
{
    for( let j = 0; j < array1[i].length; j++)
    {
        newArray = array1[i][j];
        console.log(newArray);
    }
}

//3rd Assignment converting numbers array to the string array

console.log(`


3rd Assignment:
------------------------------`)
let numbersArray = [1,2,3,4,5,6,7,8,9];
console.log("numbers Array " + numbersArray);
let convrertToString = [" "];
console.log(convrertToString);
    for(let i = 0; i < numbersArray.length; i++)
    {
        convrertToString = numbersArray[i];
        console.log(" '" + convrertToString + "'");    
    }
    // couldn't acheive the goal to have one string array. :(


    
    // Objects 
    let book = {
        title: 'cracking the coding interview',
        author: 'gayle',
        pusblisher: 'houghton miffin'
    };
    console.log(book);

    let book1 = {
        title: 'clean code',
        author: 'Robert c martin',
        pusblisher: 'prantice hall'
    };
    console.log(book1);

    let book3 = {
        title: 'pragmatic programmer',
        author: 'andrew haun',
        pusblisher: 'apple'
    };
    console.log(book3);



    
    const userList = [
        {
             id: 001,
       make: 'Ford', 
       model: 'Fiesta', 
       color: 'Purple',
        },
        {
       id: 002, 
       make: "Subaru", 
       model: "Outback", 
           color: "Green",   
        },
        {
       id: 003, 
       make: "Volkswagen", 
       model: "Up",
       color: "White",       
        }
      ]
      for(let i = 0; i < userList.length;i++)
      {
          let printId = userList[i];
          console.log(printId);
          console.log(userList[i].color);
      }
      userList.push({
          id:01,
          make: 'tesla model 3',
          model: 'tesla',
          color: 'black'
      })
      
    
    