// Find Large from 3 without function
const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log("Jim is the ultimate boss");
}
else if(tim > jim && tim > kim){
    console.log("Tim is the ultimate boss");
}
else{
    console.log("Kim is the kadasians boss");
}

// Find Large from 3 inside function:
function findMax(num1, num2, num3){
     if(num1 > num2 && num1 > num3){
        return num1;
     }
     else if(num2 > num1 && num2 > num3){
        return num2;
     }
     else{
        return num3;
     }
}


// function call:
const largestNumber = findMax(45, 42, 77);
console.log("The Largest number is: ", largestNumber);


// max number find using Math.max() function
const max = Math.max(12,24,11,56); //Number of element doesn't matter
console.log("Large Number Finding Using Math.max() Function:");
console.log(max);