// having 2 pokemon, with specific oppHP
const myPokemon = "Charmander";
const opponent = "Mr.Mime";
let myHP = 100;
let oppHP = 200;
let isMyTurn = true;
let currentPokemon = myPokemon;
let damage1 = 50;

const moves = [
  {
    name: "shadow balls",
    damage: 50,
    type: "fire"
  },
  {
    name: "tackle",
    damage: 5,
    type: "fighting"
  }
];

const moves2 = {
  "shadow balls": {
    damage: 50,
    type: "fire"
  },
  tackle: {
    damage: 5,
    type: "fighting"
  }
};

console.log("move index 1 " + moves[1].damage);
console.log("move name shadow balls " + moves2["shadow balls"].damage);
console.log("You have encountered a wild " + opponent);
console.log("You send out " + myPokemon);
console.log(myPokemon + " has " + myHP + " HP");
console.log(opponent + " has " + oppHP + " HP");

// the game continues while either pokemon has more than 0 HP
// as long as my HP is more than 0 and opponent HP is more than 50
// if myHP goes below 0, stop
// if oppHP goes below 0, stop

// myHP >0 || oppHP > 0
// my HP goes below 0, but opponent HP is above 0, continue
// opponent HP goes below 0, but my HP is above 0, continue
// my HP is below 0 and opponent HP is below 0, stop
while (myHP > 0 && oppHP > 0) {
  console.log("------------------------------");
  //if isMyTurn=true, giv myPokemon else opponent
  let attackerName = isMyTurn ? myPokemon : opponent;
  //if isMyTurn=true, giv opponent else myPokemon
  let defenderName = isMyTurn ? opponent : myPokemon;
  // first pokemon attacks
  console.log(attackerName + " uses Shadow Ball");
  console.log("Shadow Ball hits for " + damage1 + " damage");

  const attackDamage = Math.floor(Math.random() * 10);
  console.log("Attack Damage " + attackDamage);

  if (isMyTurn) {
    oppHP = oppHP - attackDamage;
    console.log(defenderName + "'s health is reduced to " + oppHP);
  } else {
    myHP = myHP - attackDamage;
    console.log(defenderName + "'s health is reduced to " + myHP);
  }

  // TODO: switch turns
  isMyTurn = !isMyTurn;
}

if (myHP <= 0) {
  console.log(opponent + " faints");
  console.log(myPokemon + " has gained 50 exp");
} else if (oppHP <= 0) {
  console.log(myPokemon + " faints");
  console.log("GAME OVER");
}
