// console.log('Hello world');

var firstName = 'Alexandr';
const lastName = 'Makeenko';
let age = 21;
console.log(firstName + ' ' + lastName);

// _ и другие разные символы могут являться наименованием переменной
const _ = 'My content';
const $ = 'My bax';


// запросить данные у пользователя
// let newNickName = prompt('Ваш никнейм');
// alert('новый никнейм: '+newNickName);

// Math operation: + - * /

let a = 2;
let b = 4;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
// вывод 2 потом прибавлени будет 3 но в системе
console.log('++: '+a++);
// 3 -1 в системе , а вывод 2
console.log('--: '+--a);

// типы данных 
const isJs = true;
console.log(typeof(isJs));
console.log(typeof(_));
console.log(typeof(a));
console.log(typeof(D));


// приоритет операций 
let myAge = 21;
let birthYear = 2000;
let currentYear = 2001;
const IsFullAge = currentYear-birthYear>=myAge;
console.log('effeefe');
console.log(IsFullAge);

// условный формат
if(a==2)
{
    console.log('переменная а =  '+ 2);
}

const num1 = 2;
const num2 = '2';
// проверяет только содержимое
console.log(num1==num2);
// проверяться будет и тип данных
console.log(num1===num2);

let isReady = true;
if (isReady) 
{
    console.log('ready');
}

isReady ? console.log('ready'):console.log('not ready');


// функции, объекты, строки

console.log('===============================Лекция 2========================================');

function MyCurrenAge(year) {
    return 2022-year;
}

var MyAge = MyCurrenAge(1989);
console.log(MyAge);

function logInfoYear(name, year) {
    let age = MyCurrenAge(year);
    console.log('Человек'+name, 'возраст'+age);
}

logInfoYear('Alexander', 1989);

// массивы

let cars = ['Ваз', 'Ford', 'Opel'];
console.log(cars);
console.log(cars[0]);
console.log(cars.length);

for(let index=0; index<cars.length; index++) 
{
    const element = cars[index];
    console.log(element);
}

cars.push('volvo');


// краткая запись цикла for, функционал одинаковый
for(let car of cars)
{
    console.log(car);
}

const persona = {
    firstName:'Alexander',
    lastName:'Lemem',
    year:2000,
    hasWife:true,

    language:['Ru', 'En'],

    Work:function() {
        console.log('programmer');
    }
}

console.log(persona);
console.log(persona.firstName);
// console.log(persona.Work());
persona.Work();
console.log(persona['lastName']);

const key = 'language';
console.log(persona[key]);
persona.isProgrammer = true;
console.log(persona);

// type "number"
const number1 = 42; // int
const number2 = 42.42; // floot
const number3 = 10e3
console.log(number1);
console.log(number2);
console.log(number3);

console.log(Number.NaN)
console.log(typeof(Number.NaN))

console.log(5/undefined);
const w = 5/undefined;
console.log(Number.isNaN(w));
console.log(Number.isNaN(44));

const stringInt = '33';
const stringFloat = '33.33';
console.log(stringInt+2);
console.log(Number.parseInt(stringInt)+2);

console.log(+stringInt+2);


console.log(0.2+0.4);
console.log((0.2+0.4).toFixed(4));// количество знаков после запятой

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(4));
console.log(Math.pow(5,2)); // 5^2=25

console.log(Math.abs(-11)); // модуль числа
console.log(Math.max(1,2 , 3,4, 4, 21321,  2,3, 2 ,));
console.log(Math.min(1,2 , 3,4, 4, -21321,  2,3, 2 ,));

console.log(Math.floor(4.4))
console.log(Math.ceil(4.4))
console.log(Math.round(4.4))
console.log(Math.random(1, 10));

const out = `Меня зовут ${firstName} мне ${age} лет`;
console.log(out);
const out1 = `Меня зовут ${firstName} мне ${MyCurrenAge(1989)} лет`;
console.log(out1);
const out2 = `Меня зовут ${firstName} мне ${age>10 ? 'GG' : 'WP'} лет`;
console.log(out2);