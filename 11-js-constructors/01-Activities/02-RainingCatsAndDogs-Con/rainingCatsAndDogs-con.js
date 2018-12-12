// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties

/**
 * @param {boolean} raining
 * @param {string} noise
 * @return object
 */
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
  this.massHysteria = function(animal1, animal2) {
    if (animal1.raining === true && animal2.raining === true) {
      console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
  };
}
var noise = "noise";
// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Animal("true", "Woof!");
var cats = new Animal(false, "Meow!");
var lion = new Animal(true, "Rarrr");

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

massHysteria(dogs, cats);
