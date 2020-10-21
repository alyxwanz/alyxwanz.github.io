const createUserBtn = document.getElementById('createUser');
createUserBtn.onclick = task2;

function createUser(firstName, lastName, age) {
    return {
        firstName: firstName || null,
        lastName: lastName || null,
        age: age || null,
    }
}

function task2() {
    let a = prompt('please, write your firstName');
    let b = prompt('please, write your lastName');
    let c = parseInt(prompt('please, write your age'));

    createUser(a, b, c);
}
