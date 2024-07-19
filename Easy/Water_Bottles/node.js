var numWaterBottles = function(numBottles, numExchange) {
    let drinkBottle = 0;
    let emptyBottle = 0;
    while(numBottles > 0) {
        drinkBottle++;
        emptyBottle++;
        if (emptyBottle === numExchange) {
            numBottles++;
            emptyBottle = 0;
        }
        numBottles--;
    }
    return drinkBottle;
};

console.log(numWaterBottles(9, 3));
console.log(numWaterBottles(15, 4));