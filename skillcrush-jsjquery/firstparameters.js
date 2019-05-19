var chair = {};

chair.material;
chair.legs;
chair.seat;
chair.back;chair.typeChair = function(material, legs, seat, back){
  console.log("This chair has " + legs + ", " + seat + "seat, and " + back + " back.");
};chair.typeChair("wooden", 4, "padded", "ergonomic");
