const Btn = document.getElementById('pow');
Btn.onclick = powBtn;

function pow(a,b) {
    let res = a;

    for (let i = 1; i < b; i++) {
        res *= a;
    }

    return res;
}

function powBtn () {
    let a = parseInt(prompt('please, write your number'));
    let b = parseInt(prompt('please, write your number'));
    let res;

    if (b < 0) {
        alert('invalid data, plese write natural number');
    } else if (b == 0) {
        res = 1;
    } else {
        res = pow(a, b);
    }

    alert(res);
}







