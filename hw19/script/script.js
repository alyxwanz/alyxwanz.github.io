// Выберите section с id “container” без метода querySelector и с ним.
const containerByID = document.getElementById('container');
const containerBySelector = document.querySelector('#container');
console.log(containerByID);
console.log(containerBySelector);

// Выберите все li с классом "second".
const everySecondLi = document.querySelectorAll('li.second');
console.log(everySecondLi);

// Выберите li с классом "third" внутри ol .
const olThirdLi = document.querySelector('ol > li.third');
console.log(olThirdLi);

// Поместите текст “Hello” в элемент с классом “header”.
const header = document.querySelector('.header');
header.innerHTML = 'Hello';

// Добавьте класс “main” элементу с классом “footer”, а затем уберите его.
const footer = document.querySelector('.footer');
console.log(footer);

footer.classList.add('main');
console.log(footer.classList);
footer.classList.remove('main');
console.log(footer.classList);
// Создайте новый элемент li, затем добавьте в него текст "four".

const newLi = document.createElement('li');
newLi.innerHTML = 'four';

// Поместите li в элемент ul.

const ulElem = document.querySelector('ul');
ulElem.append(newLi);

// Сделайте зелёный фон всем li внутри ol.

const everyLi = document.querySelectorAll('ol > li');
console.log(everyLi)

for (i = 0; i < everyLi.length; i++) {
    everyLi[i].style.backgroundColor = "green";
}

// Удалите div с классом “footer”.

footer.remove();

