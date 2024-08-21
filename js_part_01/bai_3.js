const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

var avgScore = 0;

function calculateAvg(arr) {
    for (var i = 0; i < arr.length; i++) {
        avgScore += arr[i];
        var avg = (avgScore / arr.length);
    }
    return avg;
}
var avgDolphins = calculateAvg(dolphins);
var avgKoalas = calculateAvg(koalas);

if (avgDolphins > avgKoalas) {
    console.log('Dolphins win with scoreAvg = ' + avgDolphins);
    if (avgDolphins > 100) {
        console.log('Dolphins win with Bonus 1');
    }
} else if (avgDolphins < avgKoalas) {
    console.log('Koalas win with scoreAvg = ' + avgKoalas);
    if (avgKoalas > 100) {
        console.log('Koalas win with Bonus 1');
    }
} else {
    console.log('Draw');
    if (avgDolphins > 100) {
        console.log('Dolphins and Koalas draw with Bonus 2');
    } else {
        console.log('No team wins the trophy');
    }
}