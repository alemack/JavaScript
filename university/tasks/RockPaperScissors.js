const playerOne = {
    name:'Николай',
    age:21,
    city:'Челябинск',
    wins:0,
    sign:''
};

const playerTwo = {
    name:'Михаил',
    age:23,
    city:'Воронеж',
    wins:0,
    sign:''
};

const session = {
    players:[],
    round()
    {
        // биндинг массива игроков с функций play из объекта game 
        const ResultGame = game.play.bind(null, this.players);
        const winner = ResultGame();

        if (winner == 0) 
        {
            console.log('Ничья :(');
            console.log(this.players[0].name + ': ' + this.players[0].wins);
            console.log(this.players[1].name + ': ' + this.players[1].wins);
        }
        else
        {
            console.log('Победил ' + winner + '!');
            console.log(this.players[0].name + ': ' + this.players[0].wins);
            console.log(this.players[1].name + ': ' + this.players[1].wins);
        }
    }
};

const game = {
    play(players)
    {
        // "вскидывание руки"
        function randomSigns() {
            var signs = ['Rock', 'Paper', 'Scissors'];
            var random = Math.floor(Math.random() * signs.length);
            var sign = signs[random]; 
            return sign;
        }

        var playerOne = players[0];
        var playerTwo = players[1];
        var rounds = 0;
        var winner = '';

        while (rounds < 3) 
        {
            var signOne = randomSigns();
            playerOne.sign = signOne;
            var signTwo = randomSigns();
            playerTwo.sign = signTwo;

            switch (playerOne.sign) {
              case 'Rock':
                switch (playerTwo.sign) {
                    case 'Rock':
                        rounds++;
                        break;
                    case 'Paper':
                        playerTwo.wins= playerTwo.wins + 1;
                        rounds++;
                        break;
                    case 'Scissors':
                        playerOne.wins= playerOne.wins + 1;
                        rounds++;
                        break;
                  }
                break;
              case 'Paper':
                switch (playerTwo.sign) {
                    case 'Rock':
                        playerOne.wins= playerOne.wins + 1;
                        rounds++;
                        break;
                    case 'Paper':
                        rounds++;
                        break;
                    case 'Scissors':
                        playerTwo.wins= playerTwo.wins + 1;
                        rounds++;
                        break;
                  }
                break;
              case 'Scissors':
                switch (playerTwo.sign) {
                    case 'Rock':
                        playerTwo.wins= playerTwo.wins + 1;
                        rounds++;
                        break;
                    case 'Paper':
                        playerOne.wins= playerOne.wins + 1;
                        rounds++;
                        break;
                    case 'Scissors':
                        rounds++;
                        break;
                  }
                break;
            }
        }

        if (playerOne.wins == playerTwo.wins)
        {
            winner = 0;
        }
        else if (playerOne.wins < playerTwo.wins)
        {
            winner = playerTwo.name;
        }
        else
        {
            winner = playerOne.name;
        }

        return winner;
    }
};

session.players.push(playerOne);
session.players.push(playerTwo);

session.round();
