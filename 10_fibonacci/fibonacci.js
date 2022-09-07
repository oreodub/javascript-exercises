const fibonacci = function(nth) {
    if (nth == 1 || nth == 2) {
        return 1;
    } else if (nth < 0) {
        return 'OOPS';
    }

    return (fibonacci(nth-1) + fibonacci(nth-2));
};

// Do not edit below this line
module.exports = fibonacci;
