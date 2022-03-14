var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// Your code here
//console.log(weekday);

if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work!");
} else if (weekday === "Wednesday") {
  console.log("Hump day!");
} else if (weekday === "Thursday") {
  console.log("Getting closer to Friday!");
} else if (weekday === "Friday") {
  console.log("Weekend's almost here!");
} else {
  console.log("WEEKEND, YAYYY!");
}