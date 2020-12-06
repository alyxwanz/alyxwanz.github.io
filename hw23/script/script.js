function deepCopy(object) {
    let objectCopy, value, key

    if (typeof object !== "object" || object === null) {
        return object
    }

    objectCopy = Array.isArray(object) ? [] : {}

    for (key in object) {
        value = object[key]

        objectCopy[key] = deepCopy(value)
    }

    return objectCopy
}

const mainObj = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
}

let matrix = [
    1, 
    2,
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log(deepCopy(matrix));
