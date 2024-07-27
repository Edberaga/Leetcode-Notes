var defangIPaddr = function(address) {
    const array = [...address];
    console.log(array);
    for(let i = 0; i < array.length; i++) {
        (array[i] === ".") && array.splice(i, 1, "[.]");
    }
    return array.join("");
};

console.log(defangIPaddr("1.1.1.1"));