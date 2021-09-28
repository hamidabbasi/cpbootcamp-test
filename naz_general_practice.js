let names =[["Hamid","shahid","carlito"],"zafir","piotr"];
/*
let indexOfNames = names.indexOf("piotr");
console.log(indexOfNames);
let splicePiotr = names.splice(indexOfNames,1);
console.log(splicePiotr);
*/

let indexOfNames = names.indexOf("piotr");
let spliceNameOfPiotr = names.splice(indexOfNames);
console.log(spliceNameOfPiotr);
console.log(names);
//let printLastChar = (names[0][2][names[0][2].length -1]);
//console.log(" Last character in Carlito is : " + printLastChar);
//let remove = names.splice(1,1);
//console.log(remove);





/*
if(names.includes("piotr")){
    let getIndexOf = names.indexOf("piotr");
    let spliceName = (names.splice("getIndexOf",1));
    console.log(spliceName);
}
*/


/*
names.includes("piotr");
let splicePiotr = (names.includes("piotr"));
splicePiotr.splice(2,1);
*/

/*

let names = [["Dave", "Monil", "Naz"], "Piotr", "Archana", "Julien"];
function findandRemove(person) {
  for (let i = 0; i < names.length; i++) {
    if (typeof names[i] === "object") {
      let index = names[i].indexOf(person);
      names[i].splice(index, 1);
    } else if (typeof names[i] === "string") {
      let index = names.indexOf(person);
      names.splice(index, 1);
    }
  }

  console.log(names);
}

findandRemove("Naz");
//findandRemove("Archana");

*/

function calcSum(n){
  if(n<=0)
  {
    return n;
  }
  if(n % 2 == 0)
  {
    console.log(n);
  }
  return calcSum(n-1);

};
console.log(calcSum(10));

console.log("second assignment review starts from here");

function Sum(n){
  if(n === 0) return 0;
  console.log(n);
  return n + Sum(n -1);
}
console.log(" Sum of 10 is: " + Sum(10));

console.log("sorting an array here");

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);