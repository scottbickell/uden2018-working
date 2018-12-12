// var dogs = {
//     raining: true,
//     noise: "Woof!",
//     makeNoise: function () {
//         if (dogs.raining == true) {
//             console.log(dogs.noise);
//         }
//     }
// };
// console.log("you're in the right place, son");

// var dogs = {
//     raining: true,
//     noise: "Woof!",
//     makeNoise: function () {
//         return this.noise;
//     }
// };

// if (dogs.raining == true) {
//     console.log(dogs.makeNoise());
// }

var dogs = {
  raining: true,
  noise: "Woolf!",
  makeNoise: function () {
    if (this.raining == true ) {
      console.log(this.noise);
    }
  }
};

dogs.makeNoise();

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        if (cats.raining == true) {
            // return this.noise;
            console.log(this.noise);
        }
        else {
            console.log("not raining cats");
        }
    }
};
cats.makeNoise();

// you won't hear the cat because the value of 'raining' is false
// need to change the condition for that to work.
