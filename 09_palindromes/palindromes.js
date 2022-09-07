const palindromes = function (str) {
    let isolatedCharArr = str.toLowerCase()
                            .split('').
                            filter(char => ((char.charCodeAt() > 96) && (char.charCodeAt() < 123)))

    for (let i = 0; i < isolatedCharArr.length; i++) {
        if (isolatedCharArr[i] != isolatedCharArr[isolatedCharArr.length - (i + 1)]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
