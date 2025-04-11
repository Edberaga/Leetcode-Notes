const test_case = [
    [1, 100],
    [1200, 1230]
];

const num_test = [121, 1230, 123401];

var numIsSym = function(n) {
    const str = String(n);
    if(str.length % 2 !== 0) {
        return false;
    }

    const array = str.split("");
    // console.log(array);

    const divider = str.length / 2;
    const first_array = str.slice(0, divider).split("");
    const second_array = str.slice(divider).split("");
    // console.log(first_array, second_array);

    const first_sum = first_array.reduce((sum, n) => sum + Number(n), 0);
    const second_sum = second_array.reduce((sum, n) => sum + Number(n), 0);
    // console.log(first_sum, second_sum);
    
    return (first_sum === second_sum);
}

var countSymmetricIntegers = function(low, high) {
    let count = 0;
    for(let i = low; i <= high; i++) {
        if(numIsSym(i)) {
            console.log(`${i} is a Symmetric Number!`);
            count++;
        }
    }
    return count;
};

// for(const c of num_test) {
//     console.log(numIsSym(c));
// }

for(const c of test_case) {
    console.log(countSymmetricIntegers(c[0], c[1]));
}