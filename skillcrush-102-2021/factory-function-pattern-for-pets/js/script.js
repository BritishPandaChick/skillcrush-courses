const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Create a factory function and add properties
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    //Create a method for sleep
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    //Create a method for playtime
    play: function () {
      if (this.isTired === 10) {
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

//Create 5 new objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//Verifying objects and methods
console.log(sora, clover, baxter, cleo, francine);
console.log(clover.sleep());
console.log(baxter.play());

console.log(clover, baxter);
