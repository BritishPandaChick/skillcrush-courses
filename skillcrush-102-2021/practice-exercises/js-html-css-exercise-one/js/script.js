//Change the background color of footer
var footer = document.querySelector(".contact");
//console.log(footer);
footer.style.backgroundColor = "#d7ddf3";

//Edit text of h2 with class of tagline
var tagline = document.querySelector(".tagline");
//console.log(tagline);
tagline.innerHTML = "Be yourself without saying a word.";

//Select address element
var address = document.querySelector("address");
//console.log(address);
address.style.ineHeight = "1.5em";
address.style.fontSize = "1.75em";

// Emphasize words every day in contacts section header
var contactHeader = document.querySelector("h3");
//console.log(contactHeader);
contactHeader.innerHTML = "We're here for you <em>every day</em> of the week.";
