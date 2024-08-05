const test = [
    [["d","b","c","b","c","a"], 2],
    [["aaa","aa","a"], 1],
    [["a","b","a"], 3],
];

var kthDistinct = function(arr, k) {
    const set = new Set(arr);
    return set;
}

console.log(kthDistinct(test[0][0], test[0][1]));