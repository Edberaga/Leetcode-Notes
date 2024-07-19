var luckyNumbers = function(nums) {
    const minimumRows = [];
    const maximunCols = [];

    //Checks for the minimum number in rows
    for(let i = 0; i < nums.length; i++) {
        let minNum = nums[i][0];
        for (let j = 0; j < nums[i].length; j++) {
            console.log("Rows: ", nums[i][j]);
            if(nums[i][j] < minNum) {
                minNum = nums[i][j];
            }
        }
        minimumRows.push(minNum);
        console.log(`Rows ${i}: ${minimumRows}`);
    }

    //Checks for the maximum number in columns
    for(let i = 0; i < nums[0].length; i++) {
        let maxNum = 0;
        console.log("Column turn: ", i);
        for(let j = 0; j < nums.length; j++) {
            console.log("Colums: ", nums[j][i]);
            if(nums[j][i] > maxNum) {
                maxNum = nums[j][i];
            }
        }
        maximunCols.push(maxNum);
        console.log(`Columns ${i}: ${maximunCols}`);
    }

    //checks if the number is in both minimun row and maximun column
    for(let row of minimumRows) {
        for(let col of maximunCols) {
            if(col === row) {
                return [col];
            }
        }
    }

    console.log("Minimum Numbers of the Row", minimumRows);
    console.log("Maximun Numbers of the Column", maximunCols);
    return [];
}

console.log("================================");
console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]));

console.log("================================");
console.log(luckyNumbers([[1,10,4,2], [9,3,8,7], [15,16,17,12]]));

console.log("================================");
console.log(luckyNumbers([[7,8],[1,2]]));

console.log("================================");
console.log(luckyNumbers([[3,6],[7,1],[5,2],[4,8]]));