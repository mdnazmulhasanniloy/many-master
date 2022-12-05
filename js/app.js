
function income(){
    const income = document.getElementById('income-fild');
    const incomeString = income.value;
    const incomeAmmount = parseFloat(incomeString);
    return incomeAmmount;
}

function calculate(){

    const incomeAmmount = income();
    const food = document.getElementById('food-fild');
    const foodString = food.value;
    const foodAmmount = parseFloat(foodString);

    const rent = document.getElementById('rent-fild');
    const rentString = rent.value;
    const rentAmmount = parseFloat(rentString);

    const clotherFild = document.getElementById('clother-fild');
    
    const clothesString = clotherFild.value;
    const clothesAmmount = parseFloat(clothesString);

    let totalExpensesAmaount = foodAmmount + rentAmmount + clothesAmmount;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalExpensesAmaount;


    const balance = document.getElementById('balance');
    const restAmaount = incomeAmmount-totalExpensesAmaount;
    balance.innerText = restAmaount;
    return restAmaount;


}

function saveCalculate(){
   
    const saveFild = document.getElementById('save-Fild');
    const saveFildString = saveFild.value;
    const saveFildNumber = parseFloat(saveFildString);
    let incomes = income();
    const percentage = (saveFildNumber /  incomes)*100;
    const savingAmaount = document.getElementById('saving-amount');
    savingAmaount.innerText =percentage;
     

    let rentAmmount = calculate();
    const remainingBalance = rentAmmount - percentage;
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance;
    


}
document.getElementById('calculate-btn').addEventListener('click',function(){
    calculate();
});

document.getElementById('save-btn').addEventListener('click',function(){
    saveCalculate();
});