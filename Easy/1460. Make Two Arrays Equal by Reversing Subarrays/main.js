const test = [
    // [[1,2,3,4], [2,4,1,3]],
    // [[7], [7]],
    // [[3,7,9], [11, 9, 7]],
    [
        [937,396,309,316,278,305,937,563,385,816,333,523,874,47,281,984,431,692], 
        [937,385,816,937,309,523,281,278,316,396,984,431,47,333,692,874,563,305]
    ]
];

const quickCheck = (target, arr) => {
    console.log(target.sort().toString());
    console.log(arr.sort().toString());
    return target.sort().toString() === arr.sort().toString();
}

const canBeEqual = (target, arr) => {
    for (let i = 0; i < target.length; i++) {
        if(arr.includes(target[i])) {
            console.log("Target: " + target[i]);
            const index = arr.indexOf(target[i]);
            moveElements(arr, i, index);
        }
    }
    console.log(target.toString());
    console.log(arr.toString());
    return target.toString() === arr.toString();
};

const moveElements = (array, to, from) => {
    const num = array[from]; //take the number to move
    array.splice(from, 1);
    console.log(`"Num: ${num} has been removed from ${array}"`);
    array.splice(to, 0, num);
    console.log(`"Num: ${num} has been inserted to ${array}"`);
};

//test.map((cases) => console.log(quickCheck(cases[0], cases[1])));
test.map((cases) => console.log(canBeEqual(cases[0], cases[1])));