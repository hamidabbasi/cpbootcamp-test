// plantflowers
const canPlaceFlowers = ( n) => {
const flowerbedArray = [1,0,0,0,1];
console.log(flowerbedArray);



// adding two additional index on this array one at first and last

const newFlowerBedPush = (flowerbedArray.push(0));
const newFlowerBedUnshift = (flowerbedArray.unshift(0));

// getting length of new array 

let lengthOfFlowerBedArray = flowerbedArray.length;
console.log(lengthOfFlowerBedArray);
console.log(flowerbedArray);

let count  = 0;
for(let i = 1; i <= lengthOfFlowerBedArray; i ++)
{
    if(flowerbedArray[i] == 0 && flowerbedArray[i -1] == 0 && flowerbedArray[i+1] == 0){
        count ++;
    }
}
return count>=n;
}
console.log(canPlaceFlowers(1));//console.log(canPlaceFlowers(flowerbedArray,1));