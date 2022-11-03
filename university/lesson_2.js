// функции , их виды и как с ними работать

// function declaration
function GetName(name) {
    console.log(name);
}

GetName('Alexander');

// funtion expression
const GName = function(name) {
    console.log(name);
}
console.log(typeof(GName));
console.log(GName);
GName('Alexader');

// anonym function
var count = 0;
var interval = setInterval(function() {
    if(count==5) {
        clearInterval(interval);
    } else {
        console.log(++count);
    }
}, 1000);

// стрелочные функции
const arrow =(name)=>{
    console.log(name);
}
arrow('Alexander');

const arrow2 = name=>console.log(name);
arrow2('Alex');

const square =(a)=>{
    a= a*a
    console.log(a);
}
square('2');

// параметры по умолчанию
const sum =(a,b=0)=>a+b;
console.log(sum(2,2));

function SummAll(...all) {
    console.log(typeof(all));
    let result = 0;
    for(let num of all) {
        result+=num;
    }
    return result;
}

var result = SummAll(1,24,323,3);
console.log(result);

function creatUser(userName) {
    return function(lastName) {
        console.log(`${lastName} ${userName}`);
    }
}
// кэширует этот параметр
var CreatUser = creatUser('Alex');
CreatUser('Ivanov');
CreatUser('PETROV');

// массивы
var cars = ['Audi', 'Mazda', 'BMV'];
cars.push('Reno');

// удалили первый 
// var c1 = cars.shift()
// удалили последнее значение
// var c1 = cars.pop()
console.log(cars);

var text = 'Привет, мы изучаем JS';
var textRevers = text.split('').reverse().join('');
console.log(textRevers);
console.log(cars.indexOf('BMV'));

var people = [
    {name:"Ivan", many:400},
    {name:"Petr", many:500},
    {name:"Alex", many:600},
    {name:"Dima", many:700}, 

]
var index = people.findIndex(function(pers){
    return pers.many==600;
})
console.log(index);
var allMany = people
              .filter((pers)=>pers.many>500)
              .reduce(function(acc, pers) {
                acc += pers.many;
                return acc;
              },0)
              
              
console.log(allMany);