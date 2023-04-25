const findTheOldest = function(peopleArray) {
    let oldestPersonAge = 0;
    let oldestPersonName = peopleArray[0];
    for(let i = 0 ; i < peopleArray.length ; i++){
        let dateObject = new Date();
        let currentYear = dateObject.getFullYear();
        let personAge = (peopleArray[i].yearOfDeath || currentYear) - (peopleArray[i].yearOfBirth); 
        if(personAge > oldestPersonAge){
            oldestPersonAge = personAge;
            oldestPerson = peopleArray[i];
        }
    }


    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
