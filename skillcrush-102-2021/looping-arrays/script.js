var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

//console.log(programmingLanguages);

// Output strings with a for ... of loop
for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}

//Creating a numbered list with forEach()
programmingLanguages.forEach(function (element, index) {
  console.log(`${index + 1}. ${element.toUpperCase()}`);
});

//Filter elements by a string
var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});

console.log(updatedLanguages);
