const salaries = {
    HRs: { Alice: 500, Bob: 700  },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
};

function copyObj(salaries){

    const salariesCopy = { ...salaries };
    
    for (let key in salaries) {

        salariesCopy[key] = { ...salaries[key]};
   
        for (let prop in salariesCopy[key]) {
            salariesCopy[key][prop] *=2;
        }
    }

return salariesCopy;

}




console.log(salaries);

console.log(copyObj(salaries));