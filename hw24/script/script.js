// task 1

function createRangeFilter(min, max) {
    return (e) => {
        return e >= min && e <= max;
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.filter(createRangeFilter(4, 10)));

// task 2

const array = [
    { name: "Vasya", surname: "Ivanov" },
    { name: "Vanya", surname: "Ivanov" },
    { name: "Albert", surname: "Vasyliev" },
];

function createKeyBy(propName) {
    return (array) => {
        return array.reduce((elem, current) => {
            const value = current[propName];
            if (!elem[value]) {
                elem[value] = [];
            }
            elem[value].push(current);
            return elem;
        }, {});
    };
}

const keyBy = createKeyBy('name');

console.log(keyBy(array));

// task 3

function createCalcPercent(percent) {
    return (value) => {
        return (value / 100) * percent;
    };
}

const calcPercent = createCalcPercent(50);

