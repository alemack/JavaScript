// создаёт поле битвы
function battleField(min, max)
{
    var arr = new Array();
    for (var i=0; i < 5; i++) {
        arr[i] = new Array();
        for (var j=0; j < 7; j++){
            arr[i][j]=Math.floor(Math.random()*(max - min + 1) + min);
        }
    }
    return arr;
}

// считает корабли на созданном поле
function ships(battleField)
{
    var ships = 0
    for (var i=0; i < 5; i++) {
        for (var j=0; j < 7; j++){
            if (battleField[i][j] == 1)
            {
                ships++;
            }
        }
    }
    return ships;
}

// создает массив координат для наведения
function coordinates()
{
    var coordinates = new Array();
    var numb = 0;
    for (var i=0; i < 5; i++) {
      for (var j=0; j < 7; j++){
        coordinates[numb] = [i, j];
          numb++;
      }
    }
    return coordinates;
}

// параметры первого игрока
var battleFieldOne = battleField(0,1);
var shipsOne = ships(battleFieldOne);
var coordinatesOne = coordinates();
// параметры второго игрока
var battleFieldTwo = battleField(0,1);
var shipsTwo = ships(battleFieldTwo);
var coordinatesTwo = coordinates();

var game = setInterval(function() {
    if ((shipsOne == 0) || (shipsTwo == 0)) {
        clearInterval(game);

        console.log('------------------------------------------------------')

        if (shipsOne == 0)
        {
            console.log('Победил второй игрок');
        }
        else
        {
            console.log('Победил первый игрок');
        }
    } else {
        console.clear();
        
        function getRandomArrayElement(arr)
        {
            var number = Math.floor(Math.random()*arr.length);
            var result = arr[number]
            // "снаряд дважды в одно воронку не падает"
            arr.splice(number,1);
            return result;
        }

         console.log('Первый игрок');
         
         var el = getRandomArrayElement(coordinatesOne);
         
         var x = el[0];
         var y = el[1];
         
         switch (battleFieldOne[x][y]) 
         {
            case 0:
                // промах
                battleFieldOne[x][y] = 'O';
                break;
            case 1:
                // попал
                battleFieldOne[x][y] = 'X';
                shipsOne--;
                break;
         }
         
         battleFieldOne.forEach(element => console.log(element));

         console.log('------------------------------------------------------')

         console.log('Второй игрок');

         var el = getRandomArrayElement(coordinatesTwo);
         
         var x = el[0];
         var y = el[1];
         
         switch (battleFieldTwo[x][y]) 
         {
            case 0:
                // промах
                battleFieldTwo[x][y] = 'O';
                break;
            case 1:
                // попал
                battleFieldTwo[x][y] = 'X';
                shipsTwo--;
                break;
         }
         
         battleFieldTwo.forEach(element => console.log(element));
        }
    }, 1000);