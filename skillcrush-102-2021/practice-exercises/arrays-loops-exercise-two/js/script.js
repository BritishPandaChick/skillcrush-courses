var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log("no such element exists in the array");
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  }
};

removeItem(stuff, "yellow");
removeItem(stuff, "panda");
