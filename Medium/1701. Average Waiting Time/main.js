var averageWaitingTime = function(customers) {
    let currentTime = customers[0][0];
    console.log("Customer arrival: ", currentTime)
    const waitingTime = [];
    for(par of customers) {
        if(par[0] >= currentTime) {
            currentTime = par[0]
        }
        console.log(`Customers arrives at ${par[0]}, order needs to wait ${par[1]}, current time: ${currentTime}`);
        currentTime += par[1];
        console.log("Current time now: ", currentTime, "Total waiting time customer: ", currentTime, "-", par[0], " = ", currentTime - par[0]);
        waitingTime.push(currentTime - par[0]);
        console.log("Waiting list: ", waitingTime);
    }
    
    console.log("Today result: ", waitingTime);
    let sum = 0;
    for(par of waitingTime) {
        sum += par;
    }
    console.log("Total hour spends: ", sum)
    console.log("Average waiting time: ", (sum / customers.length).toFixed(5));
};

const test1 = [[1,2],[2,5],[4,3]];
const test2 = [[5,2],[5,4],[10,3],[20,1]];
averageWaitingTime(test1);
averageWaitingTime(test2);