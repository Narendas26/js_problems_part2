/**
 * first 100 --> 100
 * 101 to 200 --> 90
 * avobe 200 --> 70
 */

// function declaration:
function layerdDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const avobe200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){

        const first100Total = 100 * first100Price;
        const remainTotal = (quantity - 100) * second100Price;
        const total = first100Total + remainTotal;

        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainTotal =(quantity - 200) * avobe200Price;

        const total = first100Total + second100Total + remainTotal;

        return total;
    }
    
}

//function call: 1
let totalPrice = layerdDiscountedTotal(85);
console.log("You have to pay: ", totalPrice);

// function call: 2
totalPrice = layerdDiscountedTotal(175);
console.log("You have to pay: ", totalPrice);

// function call: 3
totalPrice = layerdDiscountedTotal(225);
console.log("You have to pay: ", totalPrice);