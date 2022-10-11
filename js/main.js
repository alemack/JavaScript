// устаревший метод
// document.write("Js hello");

// console.log("js hello");
// console.ifo("info message");

// ошибка
// console.error("error message");
// предупреждение
// console.warn("warn message");

const con = 10;
var num = 5;
num = 7;
console.log("Переменная: " + num + ".");
console.log("Константа: " + con + ".");

var num_1 = 5;
var num_2 = 15;
var res = num_1 - num_2;
console.log("Вычитание:" + res);
console.log("Сложение:" + (num_1 + num_2));

var num_3 = 5;
num_3 += 7;
num_3++;
console.log("Результат:" + num_3);

var str_1 = Number("12");
var str_2 = Number("2");
console.log("Результат: " + (str_1 + str_2));

console.log("Math: " + Math.PI);
console.log("Math: " + Math.E);
console.log("Math: " + Math.min(2,442,4,4242,42,24,42,24));
console.log("Math: " + Math.max(2,442,4,4242,42,24,42,24));

var number = 15;
var isHasHouse = false;

if(number == 5 || isHasHouse) {
    console.log("==5");
}
else if(number !=15) {
    console.log("!=15")
}
else if(number < 13) {
    console.log("<13")
}
else {
    console.log("else")
}

var str = "word";

switch(str) {
    case "4": console.log("Переменная 4")
    break;
    case "5": console.log("Переменная 5")
    break;
    case "word": console.log("Переменная word")
    break;
    default: console.log("default");
    break;
}

// массивы
var arr = new Array();
var arr = [5, true, "str", 5.74, 0, -100];
console.log(arr);
console.log(arr[1]);
arr[3] = "word";
console.log(arr);
console.log(arr.length);

var matrix = [
    [121, 212, "true"],
    [true, false, 122],
    [3,3,3,32]
];
console.log(matrix);
matrix[1][0] = 90;
console.log(matrix);

for(var i = 0; i < 10; i++) {
    console.log(i);
}

var j = 0;
while(j < 10) {
    console.log(j);
    j++;
}

var x = 0;
do {
    console.log(x);
    x++;
}  while(x < 10);

for(var i =10; i < 20; i+=2) {
    if(i>15)
        break; // выходит из цикла

    console.log(i);

}


for(var i =10; i < 20; i+=1) {
    if(i % 2 == 0)
        continue; // пропускает след итерации

    console.log(i);
    
}

var arr = [5,5,2,2352,252,2];

for(var i=0; i< arr.length; i++) {
    console.log("element" + (i+1) + ": " +arr[i]);
}