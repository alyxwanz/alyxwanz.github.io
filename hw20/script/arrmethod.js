function readTable () {
    const tableArray = [];
    const table = document.querySelector('tbody');
    console.log(table);
    let rowLength = table.rows.length;

    for (let i = 0; i < rowLength; i++) {
    let cells = table.rows.item(i).cells;
    let rowArr = [];

        for(let j = 0; j < cells.length; j++){
            let cellVal = cells.item(j).innerHTML; 
            rowArr.push(cellVal);
        }
    tableArray.push(rowArr);
    }

    return tableArray;
}

function sortTable(i) {
    let sortForString = (a, b) => {
        if (a[i] < b[i])
            return -1;
        if (a[i] > b[i])
            return 1;
        return 0;
    };

    let sortForNumbers = (a, b) =>  a[i] - b[i];
    let tableArray = readTable();
    const sortFunction = Number.isNaN(parseInt(tableArray[0][i])) ? sortForString : sortForNumbers;
    let res = [...tableArray].sort(sortFunction);
}

console.log(sortTable(1));

