function pigLatin(string) {
    let first = string[0]
    if (vowels.includes(first)) {
        return string + 'ay';
    } else if (consonants.includes(first)) {
        return string.split('').splice(1).join('') + first + 'ay';
    }
};
  
const consonants = [...'bcdfghjklmnpqrstvwxyz']
const vowels = [...'aeiou']
// Do not edit below this line
module.exports = pigLatin;
