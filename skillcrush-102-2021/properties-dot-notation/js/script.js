const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

//Create an object & properties with dot notation
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Build JS programs",
  "Debug JS code",
  "Write JS tests",
  "Test JS code"
];
learning.category = "Front End Development";
learning.topicImportance = "High";
//console.log(learning);

//Change and remove values
learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);
console.log(learning);

//Display text and remove a class
topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
