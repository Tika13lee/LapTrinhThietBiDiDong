var bill = [275, 4, 430];
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for(var i = 0; i < bill.length; i++) {
    console.log('The bill was ' + bill[i] + ', the tip was ' + calcTip(bill[i]) + ', and the total value ' + (bill[i] + calcTip(bill[i])));
}