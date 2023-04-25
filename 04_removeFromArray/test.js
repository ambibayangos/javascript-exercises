const removeFromArray = function(arr) {
    
    for(let i = 1; i < arguments.length; i++){
        for(let j = 0 ; j < arr.length; j++){
            let currentArrItem = arr[j];
            let currentArgumentItem = arguments[i];
            if(arr[j] === arguments[i]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
};

removeFromArray([1,2,3], "1",3);