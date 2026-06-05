/**
 * shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */

//function declaration:
function totalMoney(shirtQuantity, pantQuantity, shoeQuantity){
    // How much wood require for each single item: 
    const perShirtprice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const allShirtPrice = shirtQuantity * perShirtprice;
    const allPantPrice = pantQuantity * perPantPrice;
    const allShoePrice = shoeQuantity * perShoePrice;

    const totalPrice = allShirtPrice + allPantPrice + allShoePrice;

    return totalPrice;
}



// function call():
const total = totalMoney(2,2,1);
console.log("You need total : ", total ," Taka for all items");