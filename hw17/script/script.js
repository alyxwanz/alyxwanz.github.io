// function random(min, max) {
//     return min + Math.random() * (max - min);
// }

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

console.log(random(5,10));