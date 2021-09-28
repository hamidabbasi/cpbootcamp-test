
/*function power (base,exponent)
{
    if (exponent == 0){
        return 1;
    }
    else{
        return base * power(base, exponent -1);
    }
}
console.log(power(2,3));
*/

/*
function countDown (number){
    for(let count = number ; count >0; count--)
    {
        console.log(count);
    }
    console.log("Hi everyone printing values through the loop");
}
countDown(4);

function countDownRecurssion (num){
    if(num <= 0)
    {
        return 1;
    }
    console.log(num);
    
    countDownRecurssion(num -1);
}
console.log("printing values through recurive function")
countDownRecurssion(8);

// another example through loop and recursive function sum total

function sumOfTotal (n){
    let total = 0 ;
    for(let i  = n; i > 0; i--)
    {
        total += i; 
    }
    return total;
}
console.log("Sum of toal is : " + sumOfTotal(5));
*/

// using recursive for objects is good example for most of the cases where we use recursive.

function printChildrenRecursive(t)
{
    if(t.children.length === 0){
        return
    }
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
    
}

const tree = {
    name: 'tahir',
    children:[  
            {
            name:'hamid',
                children: [
                    {name:'Salmana',children:[]},
                    {name:'Atika',children:[]},
                    {name:'Nayab',children:[]},
                ]},
                {
                    name:'shahid',
                    children: [
                    {name: 'Zeeshan',children:[]},
                    {name: 'Aleeza',children:[]},
                    {name: 'Aleesha',children:[]},
                     ]    
                },
                {
                name:'zafir',
                children: [
                    {name:'Hashir',children:[]}
                ],
                }
        ],
    }

    console.log(printChildrenRecursive(tree));

    const factrorial = (n)=>{
        if(n===1){
            return 1;
        }
         return n * (factrorial(n-1));
       
       }
       console.log(factrorial(5));