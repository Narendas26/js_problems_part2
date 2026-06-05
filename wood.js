/**
 * chart --> 3 cft (cubic feet)
 * table --> 10 cft 
 * bed --> 50 cft
*/


//function declaration:
function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    // How much wood require for each single item: 
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChiarWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBedWood = bedQuantity * perBedWood;

    const totalWood = allChiarWood +  allTableWood + allBedWood;

    return totalWood;
}



// function call():
const total = woodQuantity(2,1,1);
console.log("You need total : ", total ," CFT Wood");



