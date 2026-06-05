// function declaration:
function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){

    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotalPrice = laptopPrice * laptopQuantity;
    const tabletTotalPrice = tabletPrice * tabletQuantity
    const mobileTotalPrice = mobilePrice * mobileQuantity;

    const total = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;

    return total;


}


// function call:
const totalBudjet = calculateElectronicsBudget(2, 1, 2);
console.log("You need total: ", totalBudjet , " bdt for your electronic gadget!");