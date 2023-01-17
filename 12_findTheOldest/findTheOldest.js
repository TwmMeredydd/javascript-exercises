const findTheOldest = function(people) {
    return people.reduce((oldest, next) => {
        return calculateAge(oldest.yearOfBirth, oldest.yearOfDeath) 
            < calculateAge(next.yearOfBirth, next.yearOfDeath) 
            ? next : oldest;
    })
};

function calculateAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
