

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;

    const pinInput = document.getElementById('input-pin-number').value;

    if(pinInput === '1234'){
      
         const balance = document.getElementById('account-balance').innerText;

        const addMoneyNumber = parseFloat(addMoneyInput);
        const newBalance = parseFloat(balance);
        const updateBalance = addMoneyNumber + newBalance;

        // set the updated balance 
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        alert('Failed to add money! please try again');
    }
})