/*
cons = fib = (n) =>{
    let next;
    let previous = 0;
    let current = 1;

    if(n ===0)
    {
        return previous;
    }
    if( n === 1){
        return current;
    }

    for(let i = 2; i <= n; i++)
    {
        next  = previous + current;
        previous = current;
        current = next;
    }
    return next;
}
console.log(fib(10));
*/
cons = fib = (n) =>{
    if(n === 0){
        return 0;
    }
    if( n === 1){
        return 1;
    }    
    return fib(n-1) + (fib(n-2));
}
console.log(fib(10));

cons = fibAddUp = (n) =>{
    if(n === 1)
    {
        return 1;
    }
    return n + fibAddUp(n - 1);
}
console.log(fibAddUp(5));


var array_sum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
      return my_array.pop() + array_sum(my_array);
    }
  };
  
  console.log(array_sum([1,2,3,4,5,6]));