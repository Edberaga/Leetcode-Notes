function reverseParentheses(s) {
    let stack = [];
    for (let char of s) {
        if (char === '(') {
            stack.push(''); // Start a new substring
        } else if (char === ')') {
            let str = stack.pop();
            str = str.split('').reverse().join('');
            if (stack.length > 0) {
                stack[stack.length - 1] += str; // Append the reversed substring to the previous substring
            } else {
                stack.push(str); // If the stack is empty, push the reversed string back
            }
        } else {
            if (stack.length > 0) {
                stack[stack.length - 1] += char; // Append the character to the current substring
            } else {
                stack.push(char); // If the stack is empty, start a new substring
            }
        }
    }
    return stack.join(''); // Join all substrings to form the final result
}

// Test cases
console.log(reverseParentheses("(abcd)")); // Output: "dcba"
console.log(reverseParentheses("(u(love)i)")); // Output: "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")); // Output: "leetcode"