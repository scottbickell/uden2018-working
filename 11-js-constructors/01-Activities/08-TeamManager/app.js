// name: Property which contains the player's name
// position: Property which holds the player's position
// offense: Property which is a value between 1 and 10 to show how good this player is on offense
// defense: Property which is a value between 1 and 10 to show how good this player is on defense

// goodGame: Method which increases either the player's offense or defense property based upon a coinflip.
// badGame: Method which decreases either the player's offense or defense property based upon a coinflip.
// printStats: Method which prints all of the player's properties to the screen

// dependency for inquirer npm package
var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
}

Player.prototype.goodGame = function () {
  // console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
  // this.age + "\nLanguages: " + this.language);
};

Player.prototype.badGame = function () {
  // stuff goes here
}

Player.prototype.printStats = function () {
  console.log("Name: " + this.name + "Position: " + this.position + "Offensive value: " + this.offense + "Defensive value: " + this.defense);
}

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
inquirer.prompt([{
  name: "name",
  message: "What is your name?"
}, {
  name: "position",
  message: "What is your current position?"
}, {
  name: "offense",
  message: "What is your offensive value (whatever the hell that is)?"
}, {
  name: "defense",
  message: "What is your defensive value (whatever the hell that is)?"
}]).then(function (answers) {
  // initializes the variable newPlayer to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
  // printStats method is run to show that the newPlayer object was successfully created and filled
  newPlayer.printStats();

  var playerArr = [];

  playerArr.push(newPlayer.printStats);

  console.log(playerArr);
  

});