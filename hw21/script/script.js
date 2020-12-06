const ol = document.querySelector('ol');
let current = null;


function addLi() {
    const textFieldNode = document.querySelector('.textArea');
    const li = document.createElement('li');
    li.innerHTML = textFieldNode.value;
    ol.append(li);
    textFieldNode.value = '';
}


function removeLi() {
    if (current) {
        current.remove();
        current = null;
        return;
    }
    const li = document.querySelector('ol > li:last-child');
    if (li) {
        li.remove();
    }
}

function chooseLi(event) {
    if (current) {
        current.classList.remove('selected');
    }
    const li = event.target.closest('li');
    if (li) {
        current = li;
        current.classList.add('selected');
    }
}
ol.addEventListener('click', chooseLi);
