var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "You need to provide 2 numbers";
  } else if (typeof num2 !== "number") {
    return "You need to provide 2 numbers";
  }
  return num1 * num2;
};

console.log(multiply(2, 2));
console.log(multiply(3.4, -99.3));
console.log(multiply("mama", "mia"));
