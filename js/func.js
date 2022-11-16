function info(word) {
    console.log(word +"hello");
}

var a = parseInt(prompt('a'));
var b = parseInt(prompt('b'));

function summa(a, b) {
    var res = a + b;
    console.log(res);
}

function sumArr(arr) {
    var sum = 0;
    for (var i =0; i < arr.length; i++)
        sum+=arr[i];
    return sum;
}


summa(a, b);
info("hello ");

var array = [5, 66, 1];
var res = sumArr(array);
console.log(res);
alert(res);