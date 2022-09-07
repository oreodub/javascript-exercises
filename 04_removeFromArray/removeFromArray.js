const removeFromArray = function(arr, ...values) {
    for (let i = 0; i < values.length; i++) {
        let index = arr.indexOf(values[i]);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
