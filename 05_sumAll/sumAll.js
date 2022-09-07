const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    let start = 0;
    let end = 0;

    if (num1 > num2) {
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
