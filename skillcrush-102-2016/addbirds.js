var birdsSpotted = [4,5,8,1,0,8,11];var birdsTotal = 0;
for (var i = 0; i < birdsSpotted.length; i++){
  birdsTotal = birdsTotal + birdsSpotted[i];
}
console.log("I spotted " + birdsTotal + " birds today.");