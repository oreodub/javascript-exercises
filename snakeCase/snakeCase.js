const snakeCase = function(phrase) {
    let letters = phrase
    // .toLowerCase().split('');
    let newPhrase = '';

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        let nextLetter = letters[i+1];
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
            newPhrase += letter;
        } else if (letter == ' ' | letter == '-'){
            newPhrase += '_';
        } else if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            newPhrase += `_${letter.toLowerCase()}`
        } else {
            newPhrase += letter
        }
    }
    // console.log(wordsNoSpace, 'wordsnosapce',wordsNoSpace.split(' '))
    // let wordsRemovePunc = wordsNoSpace.split(' ').forEach(word => {
    //     word.split('').filter(letter => {
    //         console.log(letter,'lett')
    //         return (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
    //     })
    // })
                                    
        
    // console.log(wordsRemovePunc)
    return newPhrase;
};


// Do not edit below this line
module.exports = snakeCase;
