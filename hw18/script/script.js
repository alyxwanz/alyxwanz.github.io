// Создайте функцию capitalize(string), которая принимает строку со словами через пробел и заменяет первую букву каждого слова на заглавную

function capitalize(string) {
    let splitStringArray = string.split(' ');
    for (let i = 0; i < splitStringArray.length; i++) {
        splitStringArray[i] = splitStringArray[i][0].toUpperCase() + splitStringArray[i].slice(1);
    }
    return splitStringArray.join(' ');
}

console.log(capitalize('string string string'));


// Напишите функцию checkSubstring(string, substring), которая проверяет наличие подстроки substring в строке string. Проверка должна быть нечувствительна к регистру.

function checkSubstring(string, substring) {
    return string.toLowerCase().includes(substring.toLowerCase());
}

console.log(checkSubstring('hello world', 'WORLD'));

