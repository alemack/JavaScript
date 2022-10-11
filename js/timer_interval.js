// ИНТЕРВАЛЫ
// через каждую секунду будем вызывать эту функцию
var id = setInterval(my_func, 1000)

var counter = 0;
function my_func(){
    counter++;
    console.log(counter);
    if (counter == 3)
        // остановили интервал
        clearInterval(id);
}

/* ВАРИАНТ 2
setInterval(function() {
    console.log("через 1.5 секунды");
}, 1500);
*/

// ТАЙМЕРЫ
setTimeout(function(){
    console.log("timer working")
}, 2000);

