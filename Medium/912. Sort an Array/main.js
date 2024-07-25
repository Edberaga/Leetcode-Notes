const test = [
    [5,2,3,1], //[ 1, 2, 3, 5 ]
    [5,1,1,2,0,0], //[ 0, 0, 1, 1, 2, 5 ]
    [-2, 3, -5], //[-5,-2,3]
]

const sortArray = (nums) => {
    const array = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        array.push(nums[i]);
        console.log("1. Push number: " + nums[i]);
        console.log("2. Current array: " + array);
        for(let j = i; j > 0; j--) {
            if(array[j - 1] > array[j]) {
                console.log("Current number: ", array[j]);
                console.log("Current larger number: ", array[j - 1]);
                moveArray(array, j - 1, j);
                console.log("MoveArray from ", array[j], " to ", array[j - 1]);
            }
        }
        console.log("3. After sorting: ", array);
    }
    console.log("Array after operation: ", array)
    return array;
};

const moveArray = (nums, to, from) => {
    const item = nums[from];
    nums.splice(from, 1);
    nums.splice(to, 0, item);
    return nums;
}

sortArray(test[2]);