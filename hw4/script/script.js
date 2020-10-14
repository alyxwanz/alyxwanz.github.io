const beerBtn = document.getElementById('beer');
beerBtn.onclick = askForBeer;

const beer2Btn = document.getElementById('beer2');
beer2Btn.onclick = askForBeer2;

const ageBtn = document.getElementById('age');
ageBtn.onclick = legalAge;

const age2Btn = document.getElementById('age2');
age2Btn.onclick = legalAge2;

const drinkBtn = document.getElementById('drink');
drinkBtn.onclick = askForDrink;
const drink2Btn = document.getElementById('drink2');
drink2Btn.onclick = askForDrink2;

function askForBeer () {
    const a = prompt('Do you want some beer?');
    let result;
    if (a == 'yes') {
        result = 'Good for you';
    } else if (a == 'no') {
        result = 'Are you sure?';
    } else {
        result = 'Answer is not defined';
        return;
    }

    alert(result);
}

function askForBeer2 () {
    const a = prompt('Do you want some beer?');
    if (a !== 'yes' || a !== 'no') {
        alert('Answer is not defined');
        return;
    }
    const result = (a == 'yes') ? 'Good for you' : 'Are you sure?';
    alert(result);
}

function legalAge () {
    const a = parseInt(prompt('How old are you?'));
    if (Number.isNaN(a)) {
        alert('write your age');
        return;
    }

    let result;

    if (a < 18) {
        result = 'You are too ypung';
    } if(a >= 18) {
        if ( a > 30) {
            result = 'Hello Mr. Old';
        } else {
            result = 'hey buddy';
        }
    }
    alert(result);
}

function legalAge2 () {
    const a = parseInt(prompt('How old are you?'));
    if (Number.isNaN(a)) {
        alert('write your age');
        return;
    }
    let result = a < 18 ? 'You are too young' : 'Need check';

    if (result == 'Need check') {
        result = a > 30 ? 'Hello Mr. Old' : 'hey buddy';
    }

    alert(result);
}

function askForDrink () {
    const a = prompt('What do you want to drink?');
    let result; 
    if (a == 'tea') {
       const b = prompt('with sugar?');
       if (b == 'yes') {
           result = 'You choose tea with sugar';
       } else if (b == 'no') {
           result = 'You choose tea without sugar';
       } else {
           alert('Choose something');
           return;
       }
       alert(result);
    } 
    if (a == 'coffee') {
        const b = prompt('with sugar?');
        if (b == 'yes') {
            result = 'You choose coffee with sugar';
        } else if (b == 'no') {
            result = 'You choose coffee without sugar';
        } else {
            alert('Choose something');
            return;
        }
        alert(result);
    }
}

function askForDrink2 () {
    const a = prompt('What do you want to drink?');
    const result = a == 'tea' ? 'tea' : 'coffee';
    const b = prompt('With sugar?');
    let answer = b == 'yes' ? `You choose ${result} with sugar` : `You choose ${result} without sugar`;
    alert(answer);
}



