const findTheOldest = function(people) {
    people = people.sort((a, b) => {
        let aAge = !('yearOfDeath' in a) ?
                    new Date().getFullYear() - a.yearOfBirth :
                    a.yearOfDeath - a.yearOfBirth;
        let bAge = !('yearOfDeath' in b) ?
                    new Date().getFullYear() - b.yearOfBirth :
                    b.yearOfDeath - b.yearOfBirth;
        return (aAge > bAge) ? -1 : 1;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
