// function declaration:
function getMin(numbers){

    let min = numbers[0];
    for(number of numbers){
        if(min > number){
            min = number;
        }
    }

    return min;
}

// array declaration:
const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

// function call:
const minmumPrice = getMin(prices);
console.log("The Minimum Price of Mobile is: ", minmumPrice);

