function intersect(arr1, arr2) {
    const map1 = new Map();
    const map2 = new Map();

    for (const num of arr1) {
        map1.set(num, (map1.get(num) || 0) + 1);
    }

    for (const num of arr2) {
        map2.set(num, (map2.get(num) || 0) + 1);
    }

    const result = [];
    for (const [num, count1] of map1) {
        if (map2.has(num)) {
            const count2 = map2.get(num);
            const minCount = Math.min(count1, count2);
            for (let i = 0; i < minCount; i++) {
                result.push(num);
            }
        }
    }

    return result;
}

console.log(intersect([1,2,2,1], [2,2])); //[2, 2]
console.log(intersect([1,2,2,1], [2])); // [2]
console.log(intersect([4,9,5], [9,4,9,8,4])); //[4, 9] or [9, 4]