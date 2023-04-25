const palindromes = function (str) {
    let processedString = removeNonAlphabetChar(str);
    let lowerCasedString = processedString.toLocaleLowerCase();
    let reverseString = lowerCasedString.split("").reverse();
    for(let i = 0; i < reverseString.length ; i++){
        if(lowerCasedString[i] !== reverseString[i]){
            return false;
        }
    }
    return true;
};


function removeNonAlphabetChar(str){
    let processedString = "";
    for(let i = 0 ; i < str.length ; i++){
        if((str[i] !== ' ') && (str[i] !== ',') && (str[i] !== '.') && (str[i] !== '!')){
            let currentChar = str[i];
            processedString += str[i];
        }
    }
    return processedString;
}
// Do not edit below this line
module.exports = palindromes;

