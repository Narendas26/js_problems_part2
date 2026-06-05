// function declaration : add()
function add(num1, num2){
    const sum = num1 + num2; 
    return sum;
}

// function declaration: substract()
function subtract(num1, num2){
    const sub = num1 - num2;
    return sub;
}

//function declaration: multiply()
function multiply(num1, num2){
    const multi = num1 * num2;
    return multi;
}

//funciton declaration: divide()
function divide(num1, num2){
    const div = num1/num2;
    return div;
}

//function declartion: calculator()
function calculator(a, b, operation){
    if(operation === 'add'){
        // function call insided function
        const result = add(a,b);
        return result;
    }

    else if(operation === 'subtract'){
        // function call insided function
        const result = subtract(a, b);
        return result;
    }

    else if(operation === 'multiply'){
        // function call insided function
        const result = multiply(a,b);
        return result;
    }

    else if(operation === 'divide'){
        // function call insided function
        const result = divide(a,b);
        return result;
    }
    
    else{
        return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed";
    }
}


// function call:
let result = calculator(5, 7, 'add');
console.log("The result of add: ", result);

result = calculator(10, 7, 'subtract');
console.log("The result of subtract: ", result);

result = calculator(5, 7, 'multiply');
console.log("The result of multiply: ", result);

result = calculator(10, 2, 'divide');
console.log("The result of divide: ", result);

result = calculator(10, 2, 'modulus');
console.log("The result of modulus: ", result);