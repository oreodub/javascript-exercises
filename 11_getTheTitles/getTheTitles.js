const getTheTitles = function(bookArr) {
    let titleArr = [];

    for (let i = 0; i < bookArr.length; i++) {
        titleArr.push(bookArr[i].title);
    }

    return titleArr;

    // return array.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
