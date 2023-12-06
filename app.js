// Function to find an item by binary search in given array
function findByBinarySearch(searchArr, target)
{
    // if parameters are not provided.
    if(typeof searchArr === 'undefined' || searchArr.length == 0 || !target){
        return -1;
    }

    // checking if array is sorted.
    if(!isArraySorted(searchArr)){
        console.log("Please provide a sorted array. Binary search works with a sorted array.");
        return -1;
    }

    // warning if array has duplicates
    if(hasArrayDuplicates(searchArr)){
        console.log("Given array has duplicate values. First found index will be returned.");
    }

    // setting first and last index for the given array
    let startIndex = 0;
    let lastIndex = searchArr.length -1;

    // Looping array until target is found.
    while (startIndex <= lastIndex) 
    {
        // getting the center index of the array by rounding down.
        let middleIndex = Math.floor((startIndex + lastIndex) / 2)

        // if target is exactly at the middle of the array.
        // target found! 
        if (searchArr[middleIndex] === target) {
            return middleIndex;
        }

        if (searchArr[middleIndex] < target) {
          // searching on the right side of the middle index.
          startIndex = middleIndex + 1
        } else {
          // Searching on the left side of the middle index.
          lastIndex = middleIndex - 1
        }
      }

    // target doesn't exists in the given search array.
    return -1;
}

// function to verify if array is sorted (ASC)
function isArraySorted(arr) 
{ 
    for (let i = 0; i < arr.length - 1; i++) { 
        if (arr[i] > arr[i + 1]) { 
            return false; 
        } 
    } 

    return true; 
}

// function to check if array has duplicate values.
function hasArrayDuplicates(arr){
    return arr.some((item, index) => {
        return arr.indexOf(item) !== index;
    });
}

const sortedList = [1, 5, 10, 11, 16, 18, 25, 50, 51, 60, 70, 99];

const itemToFind = 25;
const result = findByBinarySearch(sortedList, itemToFind);
if (result !== -1) {
    console.log(`Search Item (${itemToFind}) found at index ${result} in the given array.`);
} else {
    console.log(`Search Item (${itemToFind}) not found in the given array.`);
}