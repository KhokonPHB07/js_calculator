function calculateMonthlyExpenses(inputMoney){
    const inputMoneyAmount=document.getElementById(inputMoney);
    const getUserData=inputMoneyAmount.value;
    const convertToInt=parseInt(getUserData);
    // inputMoneyAmount.value='';
    return convertToInt;    
}

function expensesAccount(inputMoney){
    const inputMoneyAmount=document.getElementById(inputMoney);
    const getUserData=inputMoneyAmount.innerText;
    const convertToInt=parseInt(getUserData);
    return convertToInt;    
}

document.getElementById('calculate').addEventListener('click',function(){
    const monthlyIncome=calculateMonthlyExpenses('monthly-income');
    const foodExpense=calculateMonthlyExpenses('food');
    const rentExpense=calculateMonthlyExpenses('rent');
    const clothsExpense=calculateMonthlyExpenses('dress');

    if(isNaN(monthlyIncome) || monthlyIncome<0 || isNaN(foodExpense) || foodExpense<0 || isNaN(rentExpense)|| rentExpense<0 || isNaN(clothsExpense) || clothsExpense<0){
        alert('Kindly input right amount of money');
        return;
    }

    const totalExpenses=foodExpense+rentExpense+clothsExpense;
    
    

    const totalSpentAmount=expensesAccount('totalExpenses')+totalExpenses;
    const showSpentAmount=document.getElementById('totalExpenses');
    showSpentAmount.innerText=totalSpentAmount

    const remainingAmount=expensesAccount('after-expenses')+(monthlyIncome-totalExpenses);
    const keepRestAmount=document.getElementById('after-expenses');
    keepRestAmount.innerText=remainingAmount;

})


document.getElementById('save').addEventListener('click',function(){
    const monthlyIncome=calculateMonthlyExpenses('monthly-income');
    const foodExpense=calculateMonthlyExpenses('food');
    const rentExpense=calculateMonthlyExpenses('rent');
    const clothsExpense=calculateMonthlyExpenses('dress');


    const totalExpenses=foodExpense+rentExpense+clothsExpense;
    const remainingAmount=(monthlyIncome-totalExpenses);
    
    

    const savingPercentage=calculateMonthlyExpenses('save-amount');
    const partOfIncomeSavings=(remainingAmount*savingPercentage)/100;

    const savings=expensesAccount('saving');
    const savingPlace=document.getElementById('saving');
    const savingAmount=savings+partOfIncomeSavings
    savingPlace.innerText=savingAmount;


    const finalPlaceAmount=expensesAccount('final-balance');
    const finalRestAmount=remainingAmount-savingAmount;
    const afterAllExpenses=document.getElementById('final-balance');
    afterAllExpenses.innerText=finalPlaceAmount+finalRestAmount;


})