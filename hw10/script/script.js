function emptyCheck(obj) {
    for (let a in obj) {
        return false;
    }
    return true;
}

console.log(emptyCheck());