const salaries = {
    HRs: { Alice: 500, Bob: 700  },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
};

const salariesCopy = Object.assign({}, salaries);
console.log(salariesCopy);
console.log(salaries);

for (let key in salariesCopy) {

    let value = salariesCopy[key];
   
    for (let prop in value) {
        value[prop] = value[prop]*2;
    }
}

console.log(salariesCopy)