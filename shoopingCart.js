// declare array contain object
const products = [
    {name: 'shampoo', price: 300, quantity:2 },
    {name: 'chiruni', price: 100, quantity:3 },
    {name: 'shirt', price: 700, quantity:5 },
    {name: 'pant', price: 1200, quantity:1 },
];


//function declaration:
function cartTotal(products){
    let totalPrice = 0;
    for(let product of products){
        totalPrice = totalPrice + (product.price * product.quantity); 
    }

    return totalPrice;
}


// function call:
const total = cartTotal(products);
console.log("-------------------------------");
console.log("Total Price You Have To Pay: ", total);