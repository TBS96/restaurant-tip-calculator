const calcTip = () => {
    const billAmt = parseFloat(document.getElementById('billAmt').value);
    const tipPercent = parseFloat(document.getElementById('tipPercent').value);

    if(isNaN(billAmt) || isNaN(tipPercent))
    {
        document.getElementById('result').textContent = 'Please Enter a Valid Number!';
        return;
    }

    const tipAmt = (billAmt * tipPercent) / 100;
    const totalAmt = billAmt + tipAmt;

    document.getElementById('result').innerHTML = `
    <p>Tip Amount: ₹ ${tipAmt.toFixed(2)}</p>
    <p>Total Amount: ₹ ${totalAmt.toFixed(2)}</p>
    `;
}