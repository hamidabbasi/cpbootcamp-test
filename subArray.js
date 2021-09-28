/**
 * Create a function that chunks an array into sub-arrays with element size specified by the user
 */
// Create makeChunk function declaration
function makeChunk(data, number) {
    // create a deep copy of input array
    let arr = [...data];
    // initialize empty array to push into
    let newArray = [];
    // divide length of data by number to get # of sub-arrays
    let numElements = Math.ceil(arr.length / number);
    // iterate from 1 to # of sub-arrays
    for (let i = 0; i < numElements; i++) {
      // create a temporary sub-array of size number
      let subArray = arr.splice(0, number);
      // push the sub-array into the new array
      newArray.push(subArray);
    }
    return newArray;
  }
  // Initialize Array
  const myArray = [1, 2, 3, 4, 5, 6, 7];
  // Call makeChunk function
  console.log(makeChunk(myArray, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
  console.log(makeChunk(myArray, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
  console.log(makeChunk(myArray, 4)); // [[ 1, 2, 3, 4 ], [ 5, 6, 7 ]]