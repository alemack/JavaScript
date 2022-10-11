function info(word) {
    console.log(word +"hello");
}

function summa(a, b) {
    var res = a + b;
    info(res);
}

function sumArr(arr) {
    var sum = 0;
    for (var i =0; i < arr.length; i++)
        sum+=arr[i];
    return sum;
}


summa(5,8);
info("hello ");

var array = [5, 66, 1];
var res = sumArr(array);
console.log(res);
alert(res);