var button = document.getElementById("my-button");
button.addEventListener("click", showThanks, false);

var gingerbread = document.getElementById("my-button");
button.addEventListener('dblclick', Alert, false);

function showThanks() {
    var info = document.getElementById("Thanks");
    info.style.display = "block";
}

function Alert(){
    alert("Like BritishPandaChick!");
}