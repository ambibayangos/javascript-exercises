function removeSpaceAndCommas(str){
    let processedString = "";
    for(let i = 0 ; i < str.length ; i++){
        if((str[i] !== ' ') && (str[i] !== ',') && (str[i] !== '.')){
            let currentChar = str[i];
            processedString += str[i];
        }
    }
    return processedString;
}

removeSpaceAndCommas('ZZZZ car, a man, a maracaz.');