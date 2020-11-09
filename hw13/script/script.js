function Cat(name, breed) {
    this.name = name;
    this.breed = breed;

    this.meow = function() {
        alert('meow!');
    }
}

const newCat = new Cat('Вася', 'дворняга');

newCat.meow();

console.log(newCat);


function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.greet = function() {
        alert(`hello! + ${this.firstName} + ${this.lastName}`);
    }
}

const newUser = new User('Вася', 'Пупкин', 18);
newUser.greet();

console.log(newUser);