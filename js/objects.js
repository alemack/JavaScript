var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getHours());

date.setHours(23);
console.log(date.getHours());

var arr = [9, 10, 7, 2];
console.log(arr.length);
// объединили в строку массив
console.log(arr.join("|"));
console.log(arr.sort());
console.log(arr.reverse());
var str = arr.reverse().join(", ");

console.log(str.split(", "));

// КЛАССЫ
class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    info() {
        console.log("человек" + this.name + " " + this.age);
    }
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 32, false);

console.log(bob.name);
console.log(alex.name);

alex.name = "alexander";
console.log(alex.name);

alex.info();
bob.info();