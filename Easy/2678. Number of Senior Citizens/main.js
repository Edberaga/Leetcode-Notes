const test = [
    ["7868190130M7522","5303914400F9211","9273338290F4010"],
    ["1313579440F2036","2921522980M5644"]
]

var countSeniors = function(details) {
    let count = 0;
    for(let num of details) {
        const findAge = Number(num.substr(11, 2));
        (findAge > 60) && count++;
    }
    return count;
};

test.map((cases) => console.log(countSeniors(cases)));