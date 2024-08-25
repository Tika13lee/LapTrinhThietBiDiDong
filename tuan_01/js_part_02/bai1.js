const dolphins = [44, 23, 71];
const koalas = [65, 54, 49];
const dolphins2 = [85, 54, 41];
const koalas2 = [23, 34, 27];

let calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let avgDolphins = calcAverage(dolphins);
let avgKoalas = calcAverage(koalas);
let checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No team wins!`;
    }
}
console.log(checkWinner(avgDolphins, avgKoalas));

let avgDolphins2 = calcAverage(dolphins);
let avgKoalas2 = calcAverage(koalas);
let checkWinner2 = (avgDolphins2, avgKoalas2) => {
    if (avgDolphins2 >= 2 * avgKoalas2) {
        return `Dolphins win (${avgDolphins2} vs. ${avgKoalas2}`;
    } else if (avgKoalas2 >= 2 * avgDolphins2) {
        return `Koalas win (${avgKoalas2} vs. ${avgDolphins2})`;
    } else {
        return `No team wins!`;
    }
}
console.log(checkWinner(avgDolphins2, avgKoalas2));