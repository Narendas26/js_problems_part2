// declare array contain object
const products = [
    {name: 'shampoo', price: 300, },
    {name: 'chiruni', price: 100, },
    {name: 'shirt', price: 700, },
    {name: 'pant', price: 1200, }
];


//function declare:
function getShoppingTotal(productsDetails){
    let totalPrice = 0;
    for(let product of productsDetails){
        console.log(product);
        totalPrice += product.price;
    }

    return totalPrice;
}

// function call:
const total = getShoppingTotal(products);
console.log("-----------------------------")
console.log("Total Ajke Khosabe: ", total , " Taka");

