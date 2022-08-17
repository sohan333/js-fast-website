// document.getElementById('btn-submit').addEventListener('click', function () {
//     const dipositeField = document.getElementById('diposite-field');
//     const dipositeAmmount = dipositeField.value;

//     const dipositeTotleElement = document.getElementById('diposite-totle');
//     const dipositeTotle = dipositeTotleElement.innerText;
//     console.log(dipositeTotle);
// })
document.getElementById('btn-diposite').addEventListener('click', function () {
    // console.log('item clicked')
    const dipositeField = document.getElementById('diposite-field');
    const newDipositeAmmountString = dipositeField.value;
    const newDipositeAmmount = parseFloat(newDipositeAmmountString);

    // console.log(typeof newDipositeAmmount);

    // console.log(dipositeAmmount);

    const dipositeTotalElement = document.getElementById('diposite-total');
    const previousDipositeTotalString = dipositeTotalElement.innerText;
    const previousDipositeTotal = parseFloat(previousDipositeTotalString);
    console.log(typeof previousDipositeTotal);

    const currentDipositeTotal = previousDipositeTotal + newDipositeAmmount;
    dipositeTotalElement.innerText = currentDipositeTotal;

    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDipositeAmmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    // console.log(dipositeTotal);
    dipositeTotalElement.innerText = dipositeAmmount;
    // spet 5



    dipositeField.value = '';
})