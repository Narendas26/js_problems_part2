// function declaration: find the tallest
function getMax(numbersarray){
    let tallest=0;
    for(let number of numbersarray){
        //console.log(number);
        //console.log(typeof(number));
        if(tallest < number){
            tallest = number;
        }
    }
    return tallest;
}


const height = [65, 66, 68, 72, 78, 60, 65, 66];

// function call:
const max = getMax(height);
console.log("Max Value Is: ", max);