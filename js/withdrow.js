document.getElementById('btn-withdraw').addEventListener('click', function () {

    // console.log('withdrow clicked')

    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    // console.log(newWithDrawAmount);

    const withdraTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdraTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdraTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('total-balance');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);
    // console.log(previousbalanceTotal);

    const newbalanceTotal = previousbalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newbalanceTotal;


    withdrawField.value = '';



})