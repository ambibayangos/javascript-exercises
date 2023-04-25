const leapYears = function(year) {
    if(year%4 == 0){
        if(!(year%100 == 0)){
            return true;
        }else{
            if(year%400 == 0){
                return true;
            }
        }
    }

    return false;

};

/*
//false conditions
year%4 != 0 (years not divisible by 4)
year%4 == 0 && year%100 == 0 (years divisible by 4 but also divisible by 100)

//true conditions
year%4 == 0 && !(year%100 == 0)
year%4 == 0 && year%100 == 0 && year%400 == 0
*/

// Do not edit below this line
module.exports = leapYears;
