$(document).ready(function(){
  magic8Ball = {};
  magic8Ball.listOfAnswers = ["It is certain", "Try again", "How would I know that?","Yes", "No way!", "Doubt that.", "Taking a break. Will answer later."];
  $("#answer").hide();

  magic8Ball.askQuestion = function(question){
    $("#answer").fadeIn(4000);
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListsOfAnswers);
    var answer = this.listOfAnswers[randomIndex];
    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
  };
  
  var onClick = function(){
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    var question = prompt("Ask a Yes/No Question.");
    magic8Ball.askQuestion(question);
    $("#8ball").effect("shake");
  };

  $("#questionButton").click(onClick);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
});
