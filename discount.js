/**
 * condition: 
 * upto 100 item: ---> 100
 * more than 101 to 200 item---> 90
 * more than 200 item---> 70
 */


// function declaration
function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }

    else if (quantity >= 101 && quantity <= 200){
        const total = quantity * 90;
        return total;
    }

    else{
        const total = quantity * 70;
        return total;
    }
}



// function call:
const total = discountedPrice(101);
console.log("You have to pay: ", total , " taka");