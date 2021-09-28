
let array1 = [1,2,3,4,5,6];
let array2 = [5,6,7,8,9,10];


var array3 = array1.filter(function(e) {
  return array2.indexOf(e) > -1;
});

console.log(array3);


