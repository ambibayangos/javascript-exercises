const fibonacci = function(sequenceNumber) {
    // 1 1 2 3 5 8 13 ...
    if(+sequenceNumber < 0 ){
        return "OOPS";
    }   

    let fibArrary = [1,1];

    if(+sequenceNumber === 1 || +sequenceNumber === 2 ){
        return 1;
    }

    let currentSequenceNunber = 1;
    while(currentSequenceNunber != +sequenceNumber){
       fibArrary.push(fibArrary[currentSequenceNunber] + fibArrary[currentSequenceNunber-1]);
       currentSequenceNunber++;
    }
    return fibArrary[currentSequenceNunber - 1];
};


// 1 1 2 3 fib(3)
// Do not edit below this line
module.exports = fibonacci;
