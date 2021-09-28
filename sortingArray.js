let arrayNumber=[9,8,7,6,5,4,3,2,1];
const sort =(arr)=>{
    for(let i = 0; i < arr.length -1; i++)
    {
        let max_num = arr[i];
        let max_location = 1;
        for(let j = i +1; j<arr.length;j++)
        {
            if(arr[j]> max_num)
            max_location = j;
        }
    }
    arr[max_location]=arr[i];
    arr[i]=max_num;
}
console.log(arrayNumber)