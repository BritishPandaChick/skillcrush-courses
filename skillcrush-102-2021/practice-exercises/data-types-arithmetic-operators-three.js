var hourlyWage = prompt("What is your hourly wage? (ex. 15.40)");
var weeklyHours = prompt("How many hours did you work this week?");

console.log(`I made ${(hourlyWage * weeklyHours).toFixed(2)}.`);
