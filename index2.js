/*
console.log("Hello world");
let hamid = {
    value: "hamid",
    age: 35,
    draw(){
        console.log("draw a line");
    }
};
for(let entry of Object.entries(hamid))
{
    console.log(entry,hamid[entry]);
}

// Enter one objects key values to another object


let object1 = {
    value: "Salmana Hamid Abbasi",
    age: 8,
    draw()
    {
        console.log("Hi mano");
    }
};
console.log(object1);
let anotherobj = [];
for(let key in object1){
    anotherobj[key] = object1[key];
}
console.log(anotherobj);

//functions tutorials

function sum()
{
    let total = 0;
    for(let value of arguments)
    {
        total += value;
        console.log(total);
        return total;
    }
}
console.log(sum(1,2));

//The rest Operator for functions 

function sum1 (...args)
{
    return args.reduce((a,b)=> a + b);
}
console.log(sum1(1,2,3,4,5));

//making discount function

function sum2(discount,...prices)
{
    let total = prices.reduce((a,b) => a + b);
    return total * (1  - discount);
}
console.log(sum2(0.1,1,2,3,4) + " This is your discounted price: ");

function interest(principal,rate,years)
{
    return principal * rate / 100 * years;
}
console.log(interest(165000,4.7,35));

let personArray = {
    firstName : "Hamid Ahmad abbasi ",
    lastName: "Me2.0",
    fullName (){
        return `${personArray.firstName} ${personArray.lastName}`;
    }
};
console.log(personArray.fullName());

// Another clean way to do this object is: 

const personArray1 = {
    firstName: "Shahid",
    lastName: "Abbasi",
    get fullName (){
        return `${personArray1.firstName} ${personArray1.lastName}`;
    },
    set fullName (value){
       const parts = value.split(' ');
        if(parts.length !==2)
        {
            throw new console.error("Please enter firstName and lastName");
        }
           this.firstName = parts[0];
           this.lastName = parts[1]; 
    }
};
try{
    personArray1.fullName("Hamid Abbasi");
}
catch(e)
{
    console.log(console.error());
}
*/
// practicing arrays in this lecture

//let numbers = [2,3];


/*
numbers.push(4,5,6);
    console.log(numbers);   
    numbers.unshift(0,1);
    console.log(numbers);
    numbers.push("Hamid Ahmad Abbasi");
    console.log(numbers);
    numbers.pop();
    console.log(numbers);
    numbers.splice(4,2,"Hamid Ahmad Abbasi");
    console.log(numbers);
    numbers.splice(4,1,4,5);
    console.log(numbers);

    numbers.unshift("hamid abbasi");
    console.log(numbers);
*/
//console.log(numbers);

//array find method for refernce type

let findArray = [
    {id: 1, name:'hamid'},
    {id: 2, name: 'shahid'}
];
console.log(findArray);
    const findName = findArray.find(function(course){
        return findArray.name ==='hamid';
    });
    console.log(findArray);      

//Split function and joinin arrays practice here.Beneficial while creating a URL SLUG 

let message = "Hi, My name is abbasi";
let parts = message.split(" ");
let joinMessage = parts.join('-');
console.log(joinMessage);

/*
    checking sort method with object in a array
*/
let degree = [
    {id: 1, name: 'programming fundamentals'},
    {id: 2, name: 'a'},
];
    degree.sort(function(a,b){
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;
        return 0;
    })
    console.log(degree);