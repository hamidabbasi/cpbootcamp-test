
let citiesInTheWorld = [
    ['Amsterdam', 'The Netherlands'], 
    ['Moscow', 'Russia'],
    ['Los Angeles', 'The United States'], 
    ['Seoul', 'Korea'], 
    ['Jakarta', 'Indonesia']
  ];
  function citiesWorld(arr){
    const myObject  = {};
    for(const subarray of arr)
    {
        myObject[subarray[0]] = subarray[1];
        return myObject;
    }

  }
  console.log(citiesWorld(citiesInTheWorld));

 







  