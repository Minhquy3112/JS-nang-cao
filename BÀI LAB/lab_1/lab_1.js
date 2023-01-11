const football = {
    team1: 'Barcelona',
    team2: 'Real Madrid',
    players: [
        [
            'Marc-Andre ter Stegen', 
            'Gerard Pique',
            'Dani Alves',
            'Javier Mascherano',
            'Jordi Alba',
            'Sergio Busquets',
            'Ivan Rakitic',
            'Andres Iniesta',
            'Lionel Messi',
            'Luis Suarez',
            'Neymar',

        ],
        [
            'Keylor Navas',
            'Dani Carvajal',
            'Sergio Ramos',
            'Marcelo',
            'Raphael Varane',
            'Toni Kroos',
            'Casemiro',
            'Luka Modric',
            'Cristiano Ronaldo',
            'Cristiano Ronaldo',
            'Karim Benzema',
        ],
    ],
    score: '4:0',
    scored: ['Lionel Messi', 'Sergio Busquets', 'Neymar', 'Luis Suarez'],
    date: '31/12/2003',
    odds : {
        team1: 3,
        x: 2.5,
        team2: 4.5,
    },
};
// 1: 
const [players1, players2] = football.players;
console.log(players1, players2);
// 2: 
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers);
// 3: 
const allPlayer = [...players1, ...players2];
console.log(allPlayer);
// 4: 
const players1Final = [...players1, 'Xavi', 'Pedro', 'Ronaldinho'];
console.log(players1Final);
// 5:
const {
    odds: {
    team1, x:draw, team2 },
} = football;
console.log(team1, draw, team2);
// 6. 
const printGoals = function(...players){
    console.log(`${players.length} bàn thắng đã được ghi`);
   
};
printGoals(...football.scored);
// 7. 
team1 < team2 && console.log('Team 1 có khả năng chiến thắng');
team1 > team2 && console.log('Team 2 có khả năng chiến thắng');