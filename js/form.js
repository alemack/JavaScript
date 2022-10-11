/*   БЛОК 1
// нахождение объекта по id
var text = document.getElementById('text')
text.title = "new text";
console.log(text.title);
console.log(text.id);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "new<br>string";

document.getElementById('text').style.color = "white";

// нахождение по классам и тегам
var spans = document.getElementsByTagName("span");

for(var i=0; i< spans.length; i++) {
    console.log(spans[i].innerHTML);
}

spans = document.getElementsByClassName("simple");
for(var i=0; i< spans.length; i++) {
    console.log(spans[i].innerHTML);
}
*/

document.getElementById('main-form').addEventListener("submit", checkForm);
function checkForm(event) {
    // отключаем дефолтное поведение страницы
    // в том числе перезагрузку страницы
    event.preventDefault();
    var el = document.getElementById('main-form');

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";
    if(name == "" || pass == "" || state == "")
        fail = "Заполните все поля";
    else if(name.length <=1 ||name.length > 50)
        fail = "Введите корректное имя";
    else if(pass != repass)
        fail = "Пароли должны совпадать";
    else if(pass.split("&").length > 1)
        fail = "Неккоретный пароль"; 
    
    if(fail != "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("Все данные корректно заполнены");
        window.location = "https://google.com";
    }
}