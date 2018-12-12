function DigitalPal(hungry, sleepy, bored, age) {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.feed = function () {
    if (hungry == true) {
      console.log("That was yummy");
    } else {
      console.log("No thanks, I'm full");
    }
  }
  this.sleep = function () {
    if (sleepy == true) {
      console.log("Zzzzzzzz");
    } else {
      console.log("No way! I'm not tired");
    }
  }
  this.play = function () {
    if (bored == true) {
      console.log("Yay, Let's play!");
    } else {
      console.log("Not right now. Later?");
    }
  }
  this.increaseAge = function () {
    // this method is called by the sleep() function. Not sure what to do here.
  }


};

var Dog = new DigitalPal();
Dog.outside = false;
Dog.bark = function () {
  console.log("Woof!");
}
Dog.goOutside = function () {
  if (this.outside == false) {
    console.log("Yay! I love the outdoors");
    Dog.bark();
    return true;
  } else {
    console.log("We're already outside");
  }
}
Dog.goOutside();

var Cat = new DigitalPal();
Cat.houseCondition = 100;
Cat.meow = function () {
  console.log("Meow! Meow!");
}
// Cat.meow();

Cat.destroyFurniture = function () {
  // decrease houseCondition by 10 and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!"
  Cat.houseCondition -= 10;
  console.log(Cat.houseCondition + " " + "MUAHAHAHAHA! TAKE THAT FURNITURE!");
  this.bored = false;
  this.sleepy = true;
}

Cat.destroyFurniture(Cat.bored);