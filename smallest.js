// function declaration: find the smallest
function getMin(numbersarray){
    let smallest=numbersarray[0];
    for(let number of numbersarray){
        //console.log(number);
        //console.log(typeof(number));
        if(smallest > number){
            smallest = number;
        }
    }
    return smallest;
}


const height = [65, 66, 68, 72, 78, 60, 65, 66];

// function call:
const min = getMin(height);
console.log("Min Value Is: ", min);