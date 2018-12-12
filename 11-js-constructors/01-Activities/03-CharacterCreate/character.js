function Character(name, profession, gender, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;
  this.printStats = function () {
    console.log("Name: " + this.name + "Profession: " + this.profession + "Gender: " + this.gender + "Age: " + this.age);
  };

  // IsAlive: Function which prints whether or not this character is alive by looking into their 
  // hitpoints and determining whether they are above or below zero.

  this.isAlive = function () {
    if (this.hitPoints >= 1) {
      console.log("is alive");
    } else {
      console.log("is dead");
    }
  }

  // Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

  this.attack = function () {
    // how to access the other players points?
    if (this.Character = character1) {
      // do stuff that grabs character2 hit points
      console.log("log character 1 stuff");
    }
  }

}

// 

var character1 = new Character("Bob ", "Pro Wrestler ", "male ", 36, 75, 10);
var character2 = new Character("Steve ", "Dude ", "male ", 48, 75, 10);

// console.log("Name: " + character1.name + "Profession: " + character1.profession + "Gender: " + character1.gender + "Age: " + character1.age);
// console.log("\n---------------------------\n");
// console.log("Name: " + character2.name + "Profession: " + character2.profession + "Gender: " + character2.gender + "Age: " + character2.age);

character2.printStats();
character2.isAlive();
character2.attack();
// character1.printStats();