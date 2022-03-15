/* Create and Modifying Arrays */
var hobbies = [
  "crocheting",
  "cross stitch",
  "cooking",
  "painting",
  "embroidery",
  "archery"
];

//log length of hobbies
//console.log(hobbies.length);

//add new hobby using push
hobbies.push("baking");

//Log out element at index 2
//console.log(hobbies[2]);

//remove the last element of pop
hobbies.pop();

//after 3rd element, add two elements using splice
hobbies.splice(2, 0, "dance", "candle making");

//remove the first element using shift
hobbies.shift();

//Add new element at the beginning using unshift
hobbies.unshift("beadwork");

//console.log(hobbies);

/* Create New Arrays and Combined Arrays */
var goals = ["learn how to code", "find a tech job", "start a YouTube channel"];
var allTheThings = [...hobbies, ...goals];

//choose element in the middle of allThingsArray and find the index using indexOf
console.log(allTheThings.indexOf("painting"));

//Remove element using index you discovered
allTheThings.splice(8, 1);
console.log(allTheThings);

/* Map over an array */
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}.`;
});

console.log(plans);
