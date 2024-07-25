const test = [
    [5,2,3,1], //[ 1, 2, 3, 5 ]
    [5,1,1,2,0,0], //[ 0, 0, 1, 1, 2, 5 ]
    [-2, 3, -5], //[-5,-2,3]
];

const sortArray = (nums) => {
    nums.sort((a, b) => a - b);
    console.log(nums);
    return nums;
};

test.forEach(sortArray);