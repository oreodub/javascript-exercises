const findTheOldest = function(array) {
    // let oldIndex = 0;

    // for (let i = 0; i < people.length - 1; i++) {
    //     let person = people[i];
    //     let age = person.yearOfDeath - person.yearOfBirth;
    //     let nextPerson = people[i+1];
    //     let nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
    //     if (age < nextAge) {
    //         oldIndex = i + 1;
    //     }
    // }

    // return people[oldIndex];

    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};
 

// Do not edit below this line
module.exports = findTheOldest;
