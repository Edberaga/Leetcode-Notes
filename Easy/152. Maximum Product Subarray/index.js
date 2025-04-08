const test_case = [[2,3,-2,4], [-2,0,-1], [0, 2]]

function maxProduct(nums) {
    let max1 = 0;
    let max2 = 0;

    for(let n of nums) {
        if(n > max1) {
            max2 = max1;
            max1 = n;
        } else if(n > max2) {
            max2 = n;
        }
    }
    return max1 * max2;
}

for(const c of test_case) {
    console.log(maxProduct(c));
}