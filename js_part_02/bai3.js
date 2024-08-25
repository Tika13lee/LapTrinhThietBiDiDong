function calcBMI(mass, height) {
    return mass / height ** 2;
}

function People(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height;
    this.calcBMI = () => {
        return this.mass / this.height ** 2;
    }
}

let p1 = new People('Mark', 78, 1.69);
let p2 = new People('John', 92, 1.95);

if (p1.calcBMI() > p2.calcBMI()) {
    console.log(`${p1.name}'s BMI (${p1.calcBMI().toFixed(2)}) is hight than ${p2.name}'s BMI (${p2.calcBMI().toFixed(2)})`);
} else {
    console.log(`${p2.name}'s BMI (${p2.calcBMI().toFixed(2)}) is higher than ${p1.name}'s BMI (${p1.calcBMI().toFixed(2)})`);
}
