let sortBtns = document.getElementById('sortBtns');
sortBtns.addEventListener('click', (event) => { 
    return sortTable(event.target.innerText)
}, {capture:true});


function getTheadArray() {
    const theadNodesArray = document.querySelectorAll('thead tr td button');
    let valuesArray = [];
    for (let elem of theadNodesArray) {
        valuesArray.push(elem.innerHTML);
    }

    return valuesArray;
}

console.log(getTheadArray);

function readTable () {
    const valuesArray = getTheadArray();
    let tableArray = [];
    const tbody = document.querySelector('tbody');
    let rowLength = tbody.rows.length;

    for (let i = 0; i < rowLength; i++) {
    let cells = tbody.rows.item(i).cells;
    let cellsLength = cells.length;
    let obj = {}

        for(let j = 0; j < cellsLength; j++){
            let cellVal = cells.item(j).innerHTML; 
            let key = valuesArray[j];
            obj[key] = cellVal;
        }
    tableArray.push(obj);
    }

    return tableArray;
}

function sortTable(propName) {
    let sortForString = (a, b) => {
        if (a[propName] < b[propName])
            return -1;
        if (a[propName] > b[propName])
            return 1;
        return 0;
    };

    let sortForNumbers = (a, b) =>  a[propName] - b[propName];
    let tableArray = readTable();
    const sortFunction = Number.isNaN(parseInt(tableArray[0][propName])) ? sortForString : sortForNumbers;
    let res = [...tableArray].sort(sortFunction);
    fillTable(res);
}

function fillTable(sortedArray) {
    const valuesArray = getTheadArray();
    const tbody = document.querySelector('tbody');
    let rowLength = tbody.rows.length;
    for (let i = 0; i < rowLength; i++) {
    let cells = tbody.rows.item(i).cells;
    let cellsLength = cells.length;
        for(let j = 0; j < cellsLength; j++){
            const key = valuesArray[j];
            cells.item(j).innerHTML = sortedArray[i][key]; 
        }
    }
}

