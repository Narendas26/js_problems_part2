//array declaration: item are object:
const mobiles = [
    {name: 'Iphone', price: 170000, camera: '48mp', color: 'Natural Titenium'},
    {name: 'Samsung', price: 100000, camera: '36mp', color: 'Black'},
    {name: 'Sony', price: 95000, camera: '48mp', color: 'Black'},
    {name: 'Xoami', price: 30000, camera: '12mp', color: 'Orange'},
    {name: 'Oppo', price: 20000, camera: '12mp', color: 'white'},
    {name: 'HTC', price: 25000, camera: '12mp', color: 'white'},
];


// function declaration:
function getExpensivePhone(phones){
    let highestPricePhone = phones[0];
    
     for(phone of phones){
        //console.log(phone.price);
        if(highestPricePhone.price < phone.price){
            highestPricePhone = phone;
        }
     }

     return highestPricePhone;
}

// function call:
const expensive = getExpensivePhone(mobiles);
console.log("The Highest price Phone details: ", expensive);
