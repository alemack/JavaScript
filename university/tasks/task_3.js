// task 1
console.log('task 1')
function average(...all) {
    var summ = 0;
    var count = 0;
    for(var num of all) {
        summ+=num;
        count+=1;
    }
    var res = summ/count;
    return res;
}

var result = average(5,2,2,0,8,10);
console.log(result);
console.log('---------------------------------------')


// task 2
console.log('task 2')

const decToBin = function(n) {
    var res = [];
    while(n > 0) {
        res.unshift(n % 2);
        n = Math.floor(n / 2);
    }

    return res.join('');
}
var value = 1893;
var result = decToBin(value);
console.log('Исходное:' + '' + value)
console.log('Результат:' + '' + result);
console.log('---------------------------------------')


// task 3
console.log('task 3')
var text = 'JavaScript - это жизнь';
console.log(text);
var textRevers = text.split('').reverse().join('');
console.log(textRevers);
console.log('---------------------------------------')


// task 4
// УСТАНОВИТЕ ВРЕМЯ В СЕКУНДАХ
var time = 60;
var interval = setInterval(function() {
    if(time==0 || time>3600) {
        clearInterval(interval);
    } else {
        var minute = Math.floor(time / 60);
        var seconden = time % 60;
        if (minute < 10 && seconden < 10) 
        {
            console.log('0' + minute + ':' + '0' + seconden);
        }
        else if (minute < 10)
        {
            console.log('0' + minute + ':' + seconden);
        }
        else if (seconden < 10)
        {
            console.log(minute + ':' + '0' + seconden);
        }
        else 
        {
            console.log(minute + ':' + seconden);
        }  
        time-=1;
    }
}, 1000);


// task 5
console.log('task 5')
function pascalsTriangle(levelCount) 
{
    return function generateTriangle(levelPrint)
    {
        count = 0;
        var triangle = [[],[]];
        var cell = [];

        while (count <= levelCount)
        {
            if (count == 0)
            {
                cell.push(1);
                triangle[count] = cell;
                cell = []
                count+=1;
            }
            else if (count == 1) 
            {
                cell.push(1);
                cell.push(1);
                triangle[count] = cell;
                cell = []
                count+=1;
            }
            else 
            {
                var number = count - 1;

                var oldCell = triangle[number];

                var a = oldCell.length;
                var lastIn = a-1;
                for (let i = 0; i < oldCell.length; i++) 
                {
                    if (i == 0)
                    {
                        cell.push(oldCell[i]);

                        var num = i + 1;
                        num = oldCell[i] + oldCell[num]
                        cell.push(num);
                    }
                    else if (i == lastIn)
                    {
                        cell.push(oldCell[i])
                        triangle.push(cell);
                        cell = []
                        break;
                    }
                    else 
                    {
                        var num = i + 1;
                        num = oldCell[i] + oldCell[num]
                        cell.push(num);
                    }
                }
                count+=1;
            }
        } 
        
        if (levelPrint == -1) 
        {
            console.log(triangle);
        }
        else 
        {
            console.log(triangle[levelPrint]);
        }
    }

}

var triangle = pascalsTriangle(10);
triangle(-1);
console.log('---------------------------------------')


// task 6
console.log('task 6')
var cars = [
    {model:'Granta', marc:'Lada', price:20, country:'Russia'},
    {model:'Vesta', marc:'Lada', price:12, country:'Russia'},
    {model:'Benz', marc:'Mercedes', price:98, country:'Germany'},
    {model:'Logan', marc:'Renault', price:31, country:'France'},
    {model:'Fokus', marc:'Ford', price:41, country:'USA'},
]

function averageCars(objects) {
    count = 0;
    var summ = objects.reduce(function(sum, car)
    {
        sum += car.price;
        count = count + 1;
        return sum;
    },0)
    var average = summ / count;
    var res = cars.filter((car)=>car.price>average);
    return res;
}

function countryCars(objects, originCountry) {
    var res = cars.filter((car)=>car.country==originCountry);
    return res;
}

function totalPrice(objects) {
    var res = objects
                .reduce(function(sum, car) {
                    sum += car.price;
                    return sum;
                },0)
    return res;   
}


console.log('Все машины, которые дороже средней стоимости всех авто:');
console.log(averageCars(cars));
console.log('Все машины из заданной страны X:');
console.log(countryCars(cars, 'Russia'));
console.log('Общая стоимость авто из списка выше:');
console.log(totalPrice(countryCars(cars, 'Russia')));
console.log('---------------------------------------');