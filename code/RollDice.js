// RollDice
// Rolls a dice given a number of sides and a number of dice

// Main entry point
module.exports.function = function rollDice(numDice, numSides) {

  var sum = 0;
  var result = [];

  for (var i = 0; i < numDice; i++) {
    var roll = Math.ceil(Math.random() * numSides);
    result.push(roll);
    sum += roll;
  }

  // RollResult
  return {
    sum: sum, // required Sum
    roll: result // required list Roll
  }
}
