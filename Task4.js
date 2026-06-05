// function declaration:
function getAvgPrice(mobiles){
    //console.log(mobiles);
    //console.log(typeof(mobiles));
    //console.log(Array.isArray(mobiles));

    let sum = 0;
    for(mobile of mobiles){
        //console.log(mobile);
        sum += mobile.price;
    }
    let avg = sum / mobiles.length;
    return avg;
}


const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
];

//function call:
const avgPrice = getAvgPrice(phones);
console.log("The average price of all phones are: ", avgPrice);