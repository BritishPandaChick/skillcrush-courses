const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");

const learning = {
  topic: "JS",
  learningGoals: [
    "Understand programming fundamentals",
    "Have Fun",
    "Build JS programs"
  ],
  category: "Front End Development",
  topicImportance: "high",
  hoursThisWeek: 2,
  weeklyHourGoal: 7,
  //create new properties
  achievedStudyGoal: false,
  addStudyTime: function (hours) {
    //add values and create a conditional statement
    this.hoursThisWeek += hours;

    if (this.hoursThisWeek >= this.weeklyHourlyGoal) {
      this.achievedStudyGoal = true;
      this.celebrate();
    }
  },
  //add method to celebrate
  celebrate: function () {
    body.classList.add("celebrate");
    success.classList.remove("hide");
    dance.classList.remove("hide");
  }
};

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

topicElement.classList.remove("hide");
countElement.classList.remove("hide");

//Call method
learning.addStudyTime(5);
