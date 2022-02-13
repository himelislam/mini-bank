function getInput(inputId){
    // debugger;
    const input = document.getElementById(inputId);
    const inputValueText = input.value;
    const inputValue = parseFloat(inputValueText);
    input.value = '';
    return inputValue;
}

function updateFieldAmount(fieldId, amount){
    // debugger;
    const fieldAmount = document.getElementById(fieldId);
    const fieldAmountText = fieldAmount.innerText;
    const previousAmount = parseFloat(fieldAmountText);

    fieldAmount.innerText = previousAmount + amount;
}

function getCurrentBalance(){
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentAmount = parseFloat(currentBalanceText);
    return currentAmount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousAmount = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousAmount + amount;
    }
    else{
        balanceTotal.innerText = previousAmount - amount;
    }
    
}

// for deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = getInput('deposit-input');
    if(depositInput>0){
        updateFieldAmount('deposit-total', depositInput);
        updateBalance(depositInput,true);
    }
    
})

// for withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInput>0 && withdrawInput<currentBalance){
        updateFieldAmount('withdraw-total', withdrawInput);
        updateBalance(withdrawInput,false);
    }
    
})