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