// Comparision Without Function:
const disha = 56;
const salman = 95;

if(disha > salman){
    console.log("Disha will get the strawberry");
}
else{
    console.log("Salman will eat the strawberry");
}

console.log("=========================");

// function declaration: Comparision Inside Function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

// function call: Comparision Inside Function
const max = getMax(96, 79);
console.log("Max of two number is: ", max);