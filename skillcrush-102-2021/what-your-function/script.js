//Write a function
var startMyDay = function () {
  return "Time for a coffee and a shower!";
};

console.log(startMyDay());

//Write a function with one parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

//console.log(favoriteCookie());
console.log(favoriteCookie("gingerbread"));

//Write a function with 2 parameters
var introduce = function (name, occupation) {
  return `My name is ${name} and my occupation is ${occupation}.`;
};

console.log(introduce("Sarah", "teacher"));
console.log(introduce("Eric", "truck driver"));

//Create a function to capture input
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );

  //Add conditional block
  if (numGlasses >= 8) {
    console.log("Congratulations!");
  } else {
    console.log("Not bad, not bad. Let’s try for a bit more tomorrow!");
  }
};

hydrationFeedback();
