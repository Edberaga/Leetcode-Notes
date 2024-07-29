var intersect = function(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
};

console.log(intersect([1,2,2,1], [2,2])); //[2, 2]
console.log(intersect([1,2,2,1], [2])); // [2]
console.log(intersect([4,9,5], [9,4,9,8,4])); //[4, 9] or [9, 4]