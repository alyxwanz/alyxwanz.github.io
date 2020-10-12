const button = document.getElementById('button');
button.onclick = showNearMultiple; 

function showNearMultiple(){
    const firstNumber = parseInt(prompt('your number', 100));
    const secondNumber = parseInt(prompt('your number', 3));

    if (Number.isNaN(firstNumber) || Number.isNaN(firstNumber) || secondNumber <1) {
        alert('please enter correct data');
        return;
    }

    const firstMultiple = parseInt(firstNumber/secondNumber)*secondNumber;
    const secondMultiple = firstMultiple+secondNumber;

    const firstArgument = firstNumber - firstMultiple;
    const secondArgument = secondMultiple - firstNumber

    if (secondArgument > firstArgument && firstMultiple !== 0 ) {
        alert(firstMultiple);
    } else if (secondMultiple !== 0) {
        alert(secondMultiple);
    } else {
        alert('error')
    }
}

