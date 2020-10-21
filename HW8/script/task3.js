const calcFunctionBtn = document.getElementById('calcFunction');
calcFunctionBtn.onclick = task3;

function task3() {
    let myNumber = parseInt(prompt('Give me a number'));
    console.log(myF(myNumber, myFunction1, myFunction2));
}

function myF(number, f1, f2)  {
    return number > 100 ? f1() : f2();
}

function myFunction1() {
    return 'bigger';
}
function myFunction2() {
    return 'less';
}