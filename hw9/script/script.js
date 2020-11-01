
function numbersGame () {
    let userNumber = prompt('enter your number');
    let puzzleNumber = 5;

    if (userNumber === '' || isNaN(parseInt(userNumber))) {
        alert('please, enter your number');
    } else if (parseInt(userNumber) === puzzleNumber) {
        alert('you win!');
    } else {
        alert(parseInt(userNumber) < puzzleNumber ? 'more': 'less');
    }
}
