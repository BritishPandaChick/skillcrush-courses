// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

/* Add event listener and create an element */
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);

  if (guest !== "") {
    //let listItem = document.createElement("li");
    //listItem.innerText = guest;
    //guestList.append(listItem);
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

//Clear input box
const clearInput = function () {
  guestInput.value = "";
};

//Refactor code
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//Limit the guest list
var updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
