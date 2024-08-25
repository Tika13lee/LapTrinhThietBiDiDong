let bills = [125, 555, 44];
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
let tips = [];
for(var i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}
console.log(tips);
let total = [];
for(var i = 0; i < bills.length; i++) {
    total.push(bills[i] + tips[i]);
}
console.log(total);