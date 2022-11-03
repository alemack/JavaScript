let min = prompt('Введите минимальное значение: ');
let max = prompt('Введите максимальное значение: ');
let choise = prompt('Округлять итоговое число в меньшую (0) или большую (1) сторону');

result = randomInteger(min, max, choise);
alert(result);
console.log(result);

function randomInteger(min, max, choise) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (choise == 1) {
        rndInt = Math.floor(Math.random() * (max - min)) + min;
    } else {
        rndInt = Math.ceil(Math.random() * (max - min)) + min;
    }
    return rndInt;
  }