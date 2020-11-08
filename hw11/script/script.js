function showValue(value) {
    for (let key in value) {
        if (!isNaN(parseInt(key))) {
            console.log(onlyNumbers[key])
        }
    }
}
showValue(value);

const onlyNumbers = {
    '0' : 'zero',
    '42' : 'answer',
    'greeting' : 'hello',
    '3.14' : 'PI',
    'string': 'string',
}




