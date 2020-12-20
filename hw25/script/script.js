const stringElement = 'you were meant to destroy the sith not join them';
console.log(stringElement.reverse());

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = document.querySelectorAll('div');

// let newArr = arr.map((elem) => {
//     return elem;
// });

// console.log(newArr);
// console.log(arr);

// let newArr = arr.sort((a, b) => {
//     return a < b ? -1 : 1;
// });


// task 1

String.prototype.reverse = function () {
    const arrayNewMethod = this.split('');
    arrayNewMethod.reverse();
    return arrayNewMethod.join('');
}

// task 2
Array.prototype.sorted = Array.prototype.sort
Array.prototype.sort = function (arguments) {
    const arr = [...this];
    return arr.sorted(arguments)
}

// task 3
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.find = Array.prototype.find;
NodeList.prototype.reduce = Array.prototype.reduce;

// // console.log(arr)
// console.log(arr)
// console.log(newArr)