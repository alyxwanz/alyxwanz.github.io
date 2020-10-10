let button = document.getElementById('button');
button.onclick = showNearMultiple; 

function showNearMultiple(){
    let firstNumber = parseInt(prompt('your number', 100));
    let secondNumber = parseInt(prompt('your number', 3));

    if (Number.isNaN(firstNumber) || Number.isNaN(firstNumber) || secondNumber <1) {
        alert('please enter correct data');
        return;
    }

    let firstMultiple = parseInt(firstNumber/secondNumber)*secondNumber;
    let secondMultiple = firstMultiple+secondNumber;

    let firstArgument = firstNumber - firstMultiple;
    let secondArgument = secondMultiple - firstNumber

    if (secondArgument>firstArgument && firstMultiple!=0) {
        alert(firstMultiple);
    } else if (secondMultiple!=0) {
        alert(secondMultiple);
    } else {
        alert('error')
    }
}

