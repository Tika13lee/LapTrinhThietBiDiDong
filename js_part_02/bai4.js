let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for(var i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}
console.log(tips);
for(var i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
}
console.log(totals);

function calcAverage(arr) {
    let sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));

