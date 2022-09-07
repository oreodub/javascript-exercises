const caesar = function(str, value) {
    return (str.split('') 
        .map(letter => shiftLetter(letter, value)))
        .join('');
    
};


const shiftLetter = function(char, value) {
    let newValue = char.charCodeAt();
    let shiftedValue = newValue + (value % 26);
    if (newValue < 65 || (newValue > 90 && newValue < 97) || newValue > 122) {
        return char;

    } else if (shiftedValue < 65 || (shiftedValue > 90 && shiftedValue < 97) || shiftedValue > 122) {
        if (value > 0) {
            return String.fromCharCode(shiftedValue - 26);
        } else {
            return String.fromCharCode(shiftedValue + 26);
        }
        
    } else {
        return String.fromCharCode(shiftedValue);
    }
    
}
// this shit smart af, clean way of finessing the lowercase/uppercase problem
// by subtracting to isolate the shift and adding back later after the modulo,
// avoid the problem i ran into of shifting into uppercase territory with anything above 7
const codeSet = code => (code < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// see this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
};

// Do not edit below this line
module.exports = caesar;
