//Select paragraph and button
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

//write a function to get user input
function tripInfo() {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accommodation = prompt("What are your accommodation costs?");
  var numDays = Number(prompt("How many days does your trip last?"));

  calculateDailyBudget(totalBudget, accommodation, numDays);
}

//Write a function to calculate your daily budget
function calculateDailyBudget(totalBudget, accommodation, numDays) {
  var daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
}

//call the function and add a click event
tripInfoButton.addEventListener("click", tripInfo());
