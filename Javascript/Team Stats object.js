const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Christiano',
      lastName: 'Ronaldo',
      age: 27
    },
    {
      firstName: 'Thiago',
      lastName: 'Silva',
      age: 28
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Madrid',
      teamPoints: 17,
      opponentPoints: 28
    },
    {
      opponent: 'Merseyside Red',
      teamPoints: 32,
      opponentPoints: 31
    }
  ],
  
  get playero(){
    return this._players;
  },
  get gameo(){
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Wolverhampton", 31, 76);
team.addGame("South Winchester", 22, 15);
team.addGame("Arsenal", 7, 23);

console.log(team._games);
console.log(team._players);
