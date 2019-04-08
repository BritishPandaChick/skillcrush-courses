var chair = {};
chair.material = "wooden";
chair.legs = 4;
chair.seat = "padded";
chair.back = "ergonomic";
chair.typeChair = function() {
  console.log("This chair has " + this.legs + ", " + this.seat + "seat, and " + this.back + " back.");
};
chair.typeChair();
