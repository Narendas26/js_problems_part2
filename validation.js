// function declaration: with validation
function multiply(num1, num2){
    // validation:
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return 'Please provide number only';
    }
    else{
        const multi = num1 * num2;
        return multi;
    }
}

// function call: 1
let result = multiply(5,7);
console.log("Function call: 1", result);

// function call: 2
result = multiply('seven', 5);
console.log("Function Call: 2", result);

//function call: 3
result = multiply(5, 'seven');
console.log("Function Call: 2", result);


// function declaration:
function fullName(first, second){
    if(typeof(first) !== 'string'){
        return 'First name Should be a string!';
    }
    else if (typeof(second) !== 'string'){
        return 'Last name should be a string!';
    }
    else{
        const full = first + ' ' + second;
        return full;
    }
}

// function call: 1
let full = fullName('Naren', 'das');
console.log(full);

//function call: 2
full = fullName('Naren', 7);
console.log(full);


//function declaration: Pass object as parameter
function getPrice(product){
    if(typeof(product) !== 'object'){
        return 'please provide an object!';
    }
    else{
        const price = product.price;
        return price;
    }
}


//function call: 1
let price = getPrice({name: 'Mango', price: 100, colour:'green'});
console.log(price);

//function call: 2 (Invalid)
price=getPrice(5); //In case of object when we sent a number
console.log(price);


//function declaration: array validation
function getSecond(numbers){
    if(!Array.isArray(numbers)){
        return 'Please provide an array';
    }
    else{
        const second = numbers[1];
        return second;
    }
}


// function call: 1
let secondNumber = getSecond([45, 61, 2]);
console.log(secondNumber);

// function call: 2
secondNumber = getSecond(4);
console.log(secondNumber);
