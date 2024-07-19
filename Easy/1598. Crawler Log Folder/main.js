const test = [
    ["d1/","d2/","../","d21/","./"], 
    ["d1/","d2/","./","d3/","../","d31/"], 
    ["d1/","../","../","../"]
];

var minOperations = function(logs) {
    const currentFolder = [];
    for (par of logs) {
        if(par === "../") {
            if(currentFolder == []) {
                continue;
            }
            currentFolder.pop();
        }
        else if (par === "./") {
            continue;
        }
        else {
            currentFolder.push(par);
        }
        // (par === "../") ? currentFolder.pop() :
        // (par === "./") ? currentFolder :
        // currentFolder.push(par);
    }
    return currentFolder.length;
};

for(par of test) {
    console.log("Example of ", test.indexOf(par))
    console.log(minOperations(par))
}