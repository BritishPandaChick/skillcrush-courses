$(document).ready(function() {
  var lolcatImage = document.getElementById("lolcatImage");
  var image = "https://i.ytimg.com/vi/Bkco3bE2tg8/hqdefault.jpg";

  // User gets a prompt they answer yes or no to see image.
  var showMeTheLolcat = function() {
    lolcatImage.src = image;
    prompt("Do you really want to see the LOLCat?");
  };

  //Click the button to show the cat image
  $("#lolcatButton").click(showMeTheLolcat);
});