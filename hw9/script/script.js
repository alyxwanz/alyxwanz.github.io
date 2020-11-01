// function numbersGame() {
//     let userNumber = prompt('enter your number');
//     let puzzleNumber = 5;

//     if (userNumber === '' || isNaN(parseInt(userNumber))) {
//         alert('please, enter your number');
//     } else if (parseInt(userNumber) === puzzleNumber) {
//         alert('you win!');
//     } else {
//         alert(parseInt(userNumber) < puzzleNumber ? 'more': 'less');
//     }
// }

// numbersGame()

function numbersGame() {
    let userNumber = prompt('enter your number');
    let puzzleNumber = 5;

    while (parseInt(userNumber) !== puzzleNumber) {
        if (parseInt(userNumber) < puzzleNumber) {
            alert('more');
            userNumber = prompt('enter your number');
        } else if (parseInt(userNumber) > puzzleNumber){
            alert('less');
            userNumber = prompt('enter your number');
        } else if (userNumber === '' || isNaN(parseInt(userNumber))){
            alert('please, write your number');
            userNumber = prompt('enter your number');
        } else {
            alert('you win!');
        }
    }
}

numbersGame()
