//function declaration:
function smallestName(names){
    //console.log(names);
    //console.log(typeof(names));
    let smallest = names[0];
    for(let name of names){
        if(smallest.length > name.length){
            smallest = name;
        }
    }
    return smallest;
}

const allName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// function call:
const lowestName = smallestName(allName);
console.log("The smallest Name is : ", lowestName);