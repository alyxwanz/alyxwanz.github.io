function numbersGame() {
    let userNumber = getUserNumber();
    let puzzleNumber = Math.floor(Math.random() * 10);
    while (userNumber !== puzzleNumber) {
        if (userNumber === '' || isNaN(userNumber)) {
            alert('please, enter your number');
        } else {
            alert(userNumber < puzzleNumber ? 'more': 'less'); в
        }
        userNumber = getUserNumber();
    }
    if (userNumber === puzzleNumber) {
        alert('you win!');
        let endGame = confirm('Do you wont to play another one?') ? numbersGame() : alert('see you next time!');
    }
}

numbersGame()


function getUserNumber() {
    return parseInt(prompt('enter your number'));
}




