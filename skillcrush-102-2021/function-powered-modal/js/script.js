var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

var openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};

button.addEventListener("click", function () {
  /* modal.classList.add("show-modal");
  button.innerText = "You've got this!!!"; */
  openModal();
});

modalX.addEventListener("click", function () {
  /* modal.classList.remove("show-modal");
  button.innerText = "Who's got this?"; */
  closeModal();
});

//Create a keydown event listener
document.addEventListener("keydown", function (e) {
  //console.log(e.key);'

  //Listen for the Esc key
  if (e.key === "Escape") {
    //console.log("Escape this");
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  }
});
