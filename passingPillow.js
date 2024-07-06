var passThePillow = function(n, time) {
    //Create the array
    const people = [];
    for(let i=1; i <= n; i++) {
        people.push(i);
    }

    let currentPerson = 1; //Initialize the current person holding the pillow is the first dude
    let currentDir = false;      //Initialize the current direction "true" as it went to the LEFT first
    while(time > 0) {
        console.log("Current Time: ", time);
        if(currentPerson === people[people.length - 1] || currentPerson === people[0]) {
            currentDir = !currentDir;
            console.log("Direction has been switched. currentDir: ", currentDir);
        }
        if(currentDir === true) {
            console.log("Pass from ", currentPerson);
            currentPerson++;
            console.log("To person ", currentPerson);
        }
        else {
            console.log("Pass from ", currentPerson);
            currentPerson--;
            console.log("To person ", currentPerson);
        }
        time--;
    }
    return currentPerson
};

console.log(passThePillow(4,5));
console.log(passThePillow(3,2));