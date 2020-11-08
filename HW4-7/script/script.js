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

const fibonacciBtn = document.getElementById('fibonacci');
fibonacciBtn.onclick = fibonacciNumber;

// HW4

// first task

function askForBeer () {
    const answer = confirm('Do you want some beer?');
    let result;
    if (answer == true) {
        result = 'Good for you!';
    } else {
        result = 'Are you sure?';
    }

    alert(result);
}


function askForBeer2 () {
    const answer = confirm('Do you want some beer?');
    const result = answer ? 'Good for you!' : 'Are you sure?';
    alert(result);
}

// second task

function legalAge () {
    const x = parseInt(prompt('How old are you?'));
    if (Number.isNaN(a)) {
        alert('write your age');
        return;
    }

    let result;

    if (x < 18) {
        result = 'You are too young, buddy';
    } else if (x > 18 && x < 30) {
        result = 'Hi, buddy'
    } else {
        result = 'Hello Mr. Old'
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

    result = (result == 'Need check' && a >= 30) ? 'Hello Mr. Old' : 'hey buddy';

    alert(result);
}

// third task

function askForDrink () {
    const answerDrink = confirm('What do you want to drink?');
    const answerSugar = confirm('with sugar?');
    let result;
    if (answerDrink && answerSugar) {
        result = 'Tea with sugar, Sir.'
    } else if (answerDrink && !answerSugar) {
        result = 'Tea without sugar, Sir.';
    } else if (!answerDrink && answerSugar) {
        result = 'Coffee with sugar, Sir.';
    } else {
        result = 'Coffee without sugar, Sir.';
    }

    alert(result);

}

function askForDrink2 () {
    const a = confirm('What do you want to drink?');
    const result = a == true ? 'tea' : 'coffee';
    const b = confirm('With sugar?');
    let answer = b == true ? 'You choose' + result + 'with sugar' : 'You choose' + result + 'without sugar';
    alert(answer);
}

// HW6

function fibonacciNumber () {
    let userNum = parseInt(prompt('Write your number'));
    let firstNum = 0;
    let secondNum = 1;
    let res;
    for (let i = 0; i < userNum; i++ ) {
        res = firstNum + secondNum;
        firstNum = secondNum
        secondNum = res;        
    }
    alert (res);
}

// hw7

function getOperationList () {
    let name = 'Sasha';
    let age = 28;
    let role = 'Admin';
    let occupation = 'CEO';

    let res1 = name && age > 18;
    let res2 = role === 'Admin' || occupation === 'CEO';
    let res3 = occupation || role;
    let res4 = name && age > 18 || role === 'Admin';
    let bonusRes = role !== 'Admin' && name ? age : false;
}