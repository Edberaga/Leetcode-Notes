const test = [
    [1,1,2,2,2,3],
    [2,3,1,3,2],
    [-1,1,-6,4,5,-6,1,4,1],
    [1,5,0,5]
];

var frequencySort = function(nums) {
    //Crate an array to store the num and its frequency
    const numsArray = [];
    let freqArray = [];

    //Create an array with only numbers
    for(let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        if (numsArray.includes(nums[i])) {
            const index = numsArray.indexOf(nums[i]);
            freqArray[index]++;
            // console.log("Index number: ", index);
        } else {
            numsArray.push(nums[i]);
            freqArray.push(1);
            console.log("Number ", i, "Has been pushed!");
        }
    }
    
    // console.log("Nums array: ", numsArray);
    // console.log("Freq array: ", freqArray);

    //Join the frequency and the number to each other
    const array = [];
    for(let i = 0; i < freqArray.length; i++) {
        const row = [numsArray[i], freqArray[i]];
        array.push(row);
    }
    console.log("Array : ", array);

    //Sort the array by frequency in descending order
    array.reverse();
    console.log("Array after being being reversed : ", array);
    array.sort((a, b) =>  a[1] -  b[1]);
    console.log("Array after being sorted : ", array);

    const result = [];
    // console.log("Array number : ", array[0][0], "freq : ", array[0][1]);
    // console.log("Array length : ", array.length);
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i][1]; j++) {
            result.push(array[i][0]);
            // console.log("Result : ", result);
        }
    }
    // console.log("Result : ", result);
    return result;
};

console.log(frequencySort(test[3]));

// for(let cases of test) {
//     console.log(frequencySort(cases));
// }