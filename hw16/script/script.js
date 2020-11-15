const arr = [
    {name: 'Vasya', surname: 'Ivanov'},
    {name: 'Vanya', surname: 'Ivanov'},
    {name: 'Albert', surname: 'Vasyliev'},
]



function keyBy(arr, key) {
    let res = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let value = current[key];

        if (!res.hasOwnProperty(value)) {
            res[value] = [];
        }

        res[value].push(current);
    }
    
    return res;
}

// keyByReduce

function keyByReduce(arr, key) {
    return arr.reduce((res, current) => {
        let value = current[key];
        if (!res.hasOwnProperty(value)) {
            res[value] = [];
        }
        res[value].push(current);
        return res;
    }, {});
}



console.log(keyBy(arr, 'surname'));
console.log(keyByReduce(arr, 'name'));