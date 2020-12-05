// fibonacci

function fibonacciCycle(number) {
    // Fn = Fn-1 + Fn-2.
    let firstNumber = 1;
    let secondNumber = 1;
    for (let i = 3; i <= number; i++) {
        let thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }
    return secondNumber;
}

console.log(fibonacciCycle(4));

function fibonacciRec(number) {
    if (number < 2) return number;
    return fibonacciRec(number - 1) + fibonacciRec(number - 2);
}

console.log(fibonacciRec(4));

// fuctorial

function factorialCycle(number) {
    // P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
    let res = 1;

    for (let i = 1; i <= number; i++) {
        res = res * i;
    }
    return res;
}

console.log(factorialCycle(6));

function factorialRec(number) {
    return (number != 1) ? number * factorialRec(number - 1) : 1;
}

console.log(factorialRec(6));