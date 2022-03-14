var hours = Number(prompt("How many hours do you sleep? (Enter 0-12"));

if (hours > 12) {
  console.log("Be truthful! Try again.");
} else if (hours >= 8) {
  console.log("Congratulations!");
} else if (hours >= 5) {
  console.log("You did ok. Try getting more sleep.");
} else {
  console.log("Get more sleep!");
}