function countOfAtoms(formula) {
    let stack = [{}];
    let i = 0;
    let len = formula.length;

    while (i < len) {
        if (formula[i] === '(') {
            // Start a new group
            stack.push({});
            i++;
        } else if (formula[i] === ')') {
            // End a group, apply the multiplier
            i++;
            let start = i;
            while (i < len && isDigit(formula[i])) i++;
            let multiplier = start < i ? parseInt(formula.slice(start, i)) : 1;

            let top = stack.pop();
            let prev = stack[stack.length - 1];

            for (let [element, count] of Object.entries(top)) {
                if (prev[element]) {
                    prev[element] += count * multiplier;
                } else {
                    prev[element] = count * multiplier;
                }
            }
        } else {
            // Parse an element
            let start = i;
            i++; // Move past the uppercase letter
            while (i < len && isLowerCase(formula[i])) i++;
            let element = formula.slice(start, i);

            start = i;
            while (i < len && isDigit(formula[i])) i++;
            let count = start < i ? parseInt(formula.slice(start, i)) : 1;

            let top = stack[stack.length - 1];
            if (top[element]) {
                top[element] += count;
            } else {
                top[element] = count;
            }
        }
    }

    // Get the final counts and sort them
    let finalCounts = stack.pop();
    let sortedElements = Object.keys(finalCounts).sort();
    let result = "";

    for (let element of sortedElements) {
        result += element;
        if (finalCounts[element] > 1) {
            result += finalCounts[element];
        }
    }

    return result;
}

function isLowerCase(c) {
    return c >= 'a' && c <= 'z';
}

function isDigit(c) {
    return c >= '0' && c <= '9';
}

console.log(countOfAtoms("H2O")); 
console.log(countOfAtoms("Mg(OH)2")); 
console.log(countOfAtoms("K4(ON(SO3)2)2"));