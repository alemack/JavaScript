// есть только оk
alert("какая хорошая погода");

// есть варианты ответа ok и отмена
var data= confirm("Согласны?");
console.log(data);

data = prompt("Сколько лет");
console.log(data);
data = prompt("Сколько лет", 20);
console.log(data);

var person = null;
if(confirm("Вы уверены?")) {
    person = prompt("Введите ваше имя");
    alert("Привет," + person);
} else {
    alert("Вы нажали на отмена");
}