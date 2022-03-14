var chocolateUser = Number(
    prompt("How many chocolate pieces would you like? Enter 0-10")
  );
var chocolateLeftovers = 10 - chocolateUser;
  
if (chocolateLeftovers > 10) {
    alert(`There are ${chocolateLeftovers}. You are good.`);
} else if (chocolateLeftovers > 5) {
    alert(`There are ${chocolateLeftovers} left in the bag.`);
} else if (chocolateLeftovers > 3) {
    alert(`There are ${chocolateLeftovers} left in the bag. Better buy more.`);
} else {
    alert(`There are ${chocolateLeftovers} left. We are out!`);
}