$(document).ready(function){
  var lolcatImage = document.getElementById("lolcatImage");
  image = "https://i.ytimg.com/vi/Bkco3b32tg8/hqdefault.jpg";
  var showMeTheLolcat = function(){
    lolcatImage.src = image;
    prompt("Do you really want to see the LOLCat?");
  };  
  $("#lolcatButton").click(showMeTheLolcat);
});
