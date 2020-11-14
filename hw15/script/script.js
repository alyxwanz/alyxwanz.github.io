const arr = [1, 2, 3, 4, 5];
const array2 = [1,2];

// task 1

function arrAmount(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++ ) {
        res = res + arr[i];
    }
    return res;
}

function arrAmoutReduce (numArr) {
    return numArr.reduce((result, elem) => result + elem);
}

console.log(arrAmoutReduce(arr));

// task 2

const stringArr = ['string', 'string', 'string'];

function mapToUpperCase(arr) {
    return arr.map((elem) => elem.toUpperCase());
}

console.log(mapToUpperCase(stringArr));

function toUpperCaseInCycle (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].toUpperCase());
    }
    return res
}

console.log(toUpperCaseInCycle(stringArr));


