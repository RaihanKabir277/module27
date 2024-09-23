

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value ;
    const cashOutNumber = parseFloat(cashOut);

    const PinCash = document.getElementById('cashout-pin-number').value ;

    if(PinCash === '1234'){
   
        const balance = document.getElementById('account-balance').innerText;

        const newBalance = parseFloat(balance);

        const updateBalance = newBalance - cashOutNumber;

        document.getElementById('account-balance').innerText = updateBalance;

    }
    else{
        alert('Failed to cash out. Please try again');
    }
})