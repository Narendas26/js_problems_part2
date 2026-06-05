const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

//function declaration:
function calculateMonthlySalary(staffs){
    let salary = 0;
    for(staff of staffs){
        //console.log(staff);
        let increment = staff.experience * staff.increment;
        let nitSalary = increment + staff.starting;
        salary += nitSalary;
    }

    return salary;
}

//function call:
const monthlyTotal = calculateMonthlySalary(employees);
console.log("The total monthly office have to pay: ", monthlyTotal , " bdt");