const test = [ [["Mary","John","Emma"], [180,165,170]], [["Alice","Bob","Bob"], [155,185,150]]];

var sortPeople = function(names, heights) {
    const rank = [];
    for(let i = 0; i < names.length; i++) {
        const row = [];
        row.push(names[i], heights[i]);
        rank.push(row);
    }
    rank.sort((a, b) => b[1] - a[1]); // Sort by height in descending order
    const array = [];
    for(let i = 0; i < rank.length; i++) {
        array.push(rank[i][0]);
    }
    return array;
};

//Case 1: ["Mary","Emma","John"]
//Case 2: ["Bob","Alice","Bob"]
for(let cases of test) {
    console.log(sortPeople(cases[0], cases[1]));
}