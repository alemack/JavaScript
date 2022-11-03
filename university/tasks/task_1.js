let numberTask = prompt('Выберите задание' +
 '                                                                          ' +
'1)	Для приготовления обеда повару понадобилось N кг картошки, свеклы в 3 раза меньше, а лука в 2 раза меньше чем свеклы. Сколько килограмм лука потратил повар?' 
+ '                                                                          ' +
'2)	Отцу 36 лет, а сыну 9. Во сколько раз отец старше сына и на сколько лет сын моложе отца?'
+  '                                                  ' +
'3)	Дана строка произвольного  формата, посчитать сколько каждой буквы в этом слове'
+  '                                                          ' +
'4)	Разработать приложение для решения квадратных уравнений ');


if(numberTask==1)
{
    let kg = prompt('введите количество кг картошки');

    let onion = (kg/3)/2;

    alert(onion +'кг лука потратил повар' )
    console.log(onion);
    
}
else if (numberTask==2) {

    let a = 36/9;
    let b = 36-9;

    alert('в ' + a + ' отец старше сына');
    alert('на '+ b + ' лет сын моложе отца');
    console.log(a);
    console.log(b);

}
else if (numberTask==3) {

    let str = prompt('введите произвольную строку');

    var arr = {};
    for(var i = 97; i < 123; i++){
        arr[String.fromCharCode(i)] = 0;
    }

    for(var i = 0; i < str.length; i++)
        ++arr[str[i]];

    for(key in arr) {
        if(arr[key]) {
            alert(key + ' ' + arr[key])
            console.log(key + ' ' + arr[key])
        }
    }
}
else if (numberTask==4) {

    let a = prompt('введите a');
    let b = prompt('введите b');
    let c = prompt('введите c');


    if(a == 0) {
        alert('a не может быть нуль')
        throw "stop";
    }

    let res = {};
    let D = (b * b) - (4 * a * c);
    console.log('D = ' + D);
    alert('D=' + D);
    
    if(D < 0)
    {
        alert('дискриминант меньше нуля')
        console.log('дискриминант меньше нуля');
        throw "stop";
    }

    res['d'] = D;

    if(D == 0)
    {
        res["roots"] = (-b + Math.sqrt(D)) / (2 * a);
    }
    else if(D > 0) {
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["roots"] = tmp;
    }

    for(key in res){
        if(res[key]) {
            alert(key + ' ' + res[key])
            console.log(key + ' ' + res[key])
        }
        
    }

}
else {
    alert('некорректный ввод данных: выберете задачу из предложенных четырех')
}
    