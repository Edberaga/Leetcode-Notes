const test = [
    "aababbab",
    "bbaaaabb"
];

var minimumDeletions = function(s) {
    let a = 0;
    let b = 0;
    let minDeletion = 0;
    
    for (let i = 0; i < s.length; i++) {
        console.log("Step: ", i + 1, " is ", s[i]);
        if (s[i] === 'a') {
            a++;
            console.log("a has been increased to ", a);
            if (b >= a && b !== 0) {
                minDeletion++;
                a = 0;
                b = 0;
                console.log("Minimum Deletion has been increased to ", minDeletion);
            }
        }
        if (s[i] === 'b') {
            b++;
            console.log("b has been increased to ", b);
            if (a >= b && a !== 0) {
                minDeletion++;
                a = 0;
                b = 0;
                console.log("Minimum Deletion has been increased to ", minDeletion);
            }
        }
    }
    
    return minDeletion;
};

console.log(minimumDeletions(test[0])); //output: 2
console.log(minimumDeletions(test[1])); //output: 2
