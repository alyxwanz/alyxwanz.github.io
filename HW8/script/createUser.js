const createUserBtn = document.getElementById('createUser');
createUserBtn.onclick = task2;

function createUser(firstName = null, lastName = null, age = null) {
    return {
        firstName,
        lastName,
        age,
    }
}

function task2() {
    let a = prompt('please, write your firstName');
    let b = prompt('please, write your lastName');
    let c = parseInt(prompt('please, write your age'));

    createUser(a, b, c);
}
