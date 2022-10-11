var counter = 0;

function onClickButton(el) {
    counter++;
    el.style.backgroud = "green";
    el.style.color = "blue";
    el.innerHTML = "нажатий" + counter;
    
    console.log(el.name);
}

function onInput(el) {
    if(el.value == "hello")
        alert('hi')
    console.log(el.value);
}

function load () {
    alert("Страница была загружена");
}