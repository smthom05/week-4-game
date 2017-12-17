$(document).ready(function() {

  //  GLOBAL VARIABLES
  // ====================================================
  // Generate our random target Score
  var targetTotal = Math.floor((Math.random() * 102) + 19);

  // Debugging / Checks
  console.log(targetTotal);

  // Assign our crystals random values
  var redCrystal = Math.floor((Math.random()*12)+1);
  var blueCrystal = Math.floor((Math.random()*12)+1);
  var yellowCrystal = Math.floor((Math.random()*12)+1);
  var greenCrystal = Math.floor((Math.random()*12)+1);

  // Debugging / Checks
  console.log(redCrystal);
  console.log(blueCrystal);
  console.log(yellowCrystal);
  console.log(greenCrystal);

  // GAME COUNTERS
  var winCount = 0;
  var lossCount = 0;
  var userTotal = 0;

  // FUNCTIONS
  // ====================================================
  function reset(){
    targetTotal = Math.floor((Math.random() * 102) + 19);
    userTotal = 0;
    redCrystal = Math.floor((Math.random()*12)+1);
    blueCrystal = Math.floor((Math.random()*12)+1);
    yellowCrystal = Math.floor((Math.random()*12)+1);
    greenCrystal = Math.floor((Math.random()*12)+1);
    $("#player-score").text(userTotal);
    $("#random-score").text(targetTotal);

  };

  // MAIN PROCESS
  // =======================================================

  // Getting all of our global variable values into the HTML
  $("#random-score").text(targetTotal);
  $("#wins").text(winCount);
  $("#losses").text(lossCount);
  $("#player-score").text(userTotal);

  // Attaching a data value to our crystal buttons

  $("#red-crystal").on("click", function() {
    userTotal += redCrystal;
    $("#player-score").text(userTotal)
    if (userTotal === targetTotal) {
      winCount ++;
      $("#wins").text(winCount);
      reset();
    } else if (userTotal > targetTotal) {
      lossCount ++;
      $("#losses").text(lossCount);
      reset();
    }
  });

  $("#blue-crystal").on("click", function() {
    userTotal += blueCrystal;
    $("#player-score").text(userTotal)
    if (userTotal === targetTotal) {
      winCount ++;
      $("#wins").text(winCount);
      reset();
    } else if (userTotal > targetTotal) {
      lossCount ++;
      $("#losses").text(lossCount);
      reset();
    }
  });

  $("#yellow-crystal").on("click", function() {
    userTotal += yellowCrystal;
    $("#player-score").text(userTotal)
    if (userTotal === targetTotal) {
      winCount ++;
      $("#wins").text(winCount);
      reset();
    } else if (userTotal > targetTotal) {
      lossCount ++;
      $("#losses").text(lossCount);
      reset();
    }
  });

  $("#green-crystal").on("click", function() {
    userTotal += greenCrystal;
    $("#player-score").text(userTotal)
    if (userTotal === targetTotal) {
      winCount ++;
      $("#wins").text(winCount);
      reset();
    } else if (userTotal > targetTotal) {
      lossCount ++;
      $("#losses").text(lossCount);
      reset();
    }
  });
});
