var reverseParentheses = function(s) {
    let count = -1;
    const word = [];
    for(let i = 0; i < s.length; i++) {
        console.log(s[i])
        if(s[i] === "(") {
            count++;
            word[count] = [];
        } else if(s[i] === ")") {
            count--;
        } else {
            word[count].push(s[i]);
            console.log(s[i], "Has been added to Array", count)
        }
    }
    console.log(word);
}

console.log("==============FIRST TEST==============");
reverseParentheses("(abcd)");
console.log("==============SECOND TEST==============");
reverseParentheses("(u(love)i)");
console.log("==============THIRD TEST==============");
reverseParentheses("(ed(et(oc))el)")