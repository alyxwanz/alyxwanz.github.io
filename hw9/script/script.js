function numbersGame() {
    let userNumber = getUserNumber();
    let puzzleNumber = 5;
    while (userNumber !== puzzleNumber) {
        if (userNumber === '' || isNaN(userNumber)) {
            alert('please, enter your number');
        } else {
            alert(userNumber < puzzleNumber ? 'more': 'less');
        }
        userNumber = getUserNumber();
    }
    if (userNumber === puzzleNumber) {
        alert('you win!');
        return;
    }
}

numbersGame()


function getUserNumber() {
    return parseInt(prompt('enter your number'));
}