var time = new Date().getHours();
var greeting = "Hello";
var name = "Sarah";

// Your conditional statements here
//console.log(time);

if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Go to bed";
}

alert(`${greeting} ${name}!`);