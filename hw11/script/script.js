function showValue(onlyNumbers) {}
showValue(onlyNumbers);

const onlyNumbers = {
    '0' : 'zero',
    '42' : 'answer',
    'greeting' : 'hello',
    '3.14' : 'PI',
    'string': 'string',
}

for (let key in onlyNumbers) {
    if (!isNaN(parseInt(key))) {
        console.log(onlyNumbers[key])
    }
}


