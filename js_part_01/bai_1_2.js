const mark = {
    mass: 78,
    height: 1.69
}
const join = {
    mass: 92,
    height: 1.95
}
const mark2 = {
    mass: 95,
    height: 1.88
}
const join2 = {
    mass: 85,
    height: 1.76
}

function calculateBMI(mass, height) {
    return mass / (height * height);
}

var markBMI = calculateBMI(mark.mass, mark.height);
var joinBMI = calculateBMI(join.mass, join.height);
var markHigherBMI = markBMI > joinBMI ? true : false;
if (markHigherBMI) {
    console.log('Mark\'s BMI (' + markBMI + ') is higher than John\'s (' + joinBMI + ')!');
} else {
    console.log('John\'s BMI (' + joinBMI + ') is higher than Mark\'s (' + markBMI + ')!');
}

var markBMI2 = calculateBMI(mark2.mass, mark2.height);
var joinBMI2 = calculateBMI(join2.mass, join2.height);
var markHigherBMI2 = markBMI2 > joinBMI2 ? true : false;
if (markHigherBMI2) {
    console.log('Mark\'s BMI (' + markBMI2 + ') is higher than John\'s (' + joinBMI2 + ')!');
} else {
    console.log('Join\'s BMI (' + joinBMI2 + ') is higher than Mark\'s (' + markBMI2 + ')!');
}
// console.log('Data1: Mark có BMI cao hơn John: ' + markHigherBMI);
// var markHigherBMI2 = calculateBMI(mark2.mass, mark2.height) >
//     calculateBMI(join2.mass, join2.height) ? true : false;
// console.log('Data2: Mark có BMI cao hơn John: ' + markHigherBMI2);