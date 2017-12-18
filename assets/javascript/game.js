$(document).ready(function() {
  //  GLOBAL VARIABLES
  // ====================================================
  // Generate our random target Score
  var targetTotal = Math.floor((Math.random() * 102) + 19);

  // var crystalImages = ["assets/images/redcrystal.png", "assets/images/bluecrystal.png", "assets/images/yellowcrystal.png", "assets/images/greencrystal.png"];

  // Create each crystal's object variable.
  var redCrystal = {
    value: Math.floor((Math.random()*12)+1),
    onClick: function() {
      $("#red-crystal").on("click", function() {
        userTotal += redCrystal.value;
        $("#player-score").text(userTotal)
        if (userTotal === targetTotal) {
          winCount ++;
          $("#wins").text(winCount);
          alert("You Won! You got " + targetTotal);
          reset();
        } else if (userTotal > targetTotal) {
          lossCount ++;
          $("#losses").text(lossCount);
          alert("You Lost! You went over " + targetTotal);
          reset();
        }
      });
    },
    // displayImage: function() {
    //   $("#red").html("<img src=" + crystalImages[0] + ">");
    // },
  };

  var blueCrystal = {
    value: Math.floor((Math.random()*12)+1),
    // displayImage: function() {
    //   $("#blue").html("<img src=" + crystalImages[1] + ">");
    // },
    onClick: function() {
      $("#blue-crystal").on("click", function() {
        userTotal += blueCrystal.value;
        $("#player-score").text(userTotal)
        if (userTotal === targetTotal) {
          winCount ++;
          $("#wins").text(winCount);
          alert("You Won! You got " + targetTotal);
          reset();
        } else if (userTotal > targetTotal) {
          lossCount ++;
          $("#losses").text(lossCount);
          alert("You Lost! You went over " + targetTotal);
          reset();
        };
      });
    },

  };

  var yellowCrystal = {
    value: Math.floor((Math.random()*12)+1),
    onClick: function() {
      $("#yellow-crystal").on("click", function() {
        userTotal += yellowCrystal.value;
        $("#player-score").text(userTotal)
        if (userTotal === targetTotal) {
          winCount ++;
          $("#wins").text(winCount);
          alert("You Won! You got " + targetTotal);
          reset();
        } else if (userTotal > targetTotal) {
          lossCount ++;
          $("#losses").text(lossCount);
          alert("You Lost! You went over " + targetTotal);
          reset();
        }
      });
    },
  };

  var greenCrystal = {
    value: Math.floor((Math.random()*12)+1),
    onClick: function() {
      $("#green-crystal").on("click", function() {
        userTotal += greenCrystal.value;
        $("#player-score").text(userTotal)
        if (userTotal === targetTotal) {
          winCount ++;
          $("#wins").text(winCount);
          alert("You Won! You got " + targetTotal);
          reset();
        } else if (userTotal > targetTotal) {
          lossCount ++;
          $("#losses").text(lossCount);
          alert("You Lost! You went over " + targetTotal);
          reset();
        }
      });
    },
  };

  // Debugging / Checks
  console.log(targetTotal);
  console.log(redCrystal.value);
  console.log(blueCrystal.value);
  console.log(yellowCrystal.value);
  console.log(greenCrystal.value);

  // GAME COUNTERS
  var winCount = 0;
  var lossCount = 0;
  var userTotal = 0;

  // FUNCTIONS
  // ====================================================
  function reset() {
    targetTotal = Math.floor((Math.random() * 102) + 19);
    userTotal = 0;
    redCrystal.value = Math.floor((Math.random()*12)+1);
    blueCrystal.value = Math.floor((Math.random()*12)+1);
    yellowCrystal.value = Math.floor((Math.random()*12)+1);
    greenCrystal.value = Math.floor((Math.random()*12)+1);
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


  // redCrystal.displayImage();
  redCrystal.onClick();
  // blueCrystal.displayImage();
  blueCrystal.onClick();
  yellowCrystal.onClick();
  greenCrystal.onClick();

  });

// I made attempts to use JQuery to render the images, but kept running into issues. These are the various failed random code snippets... They are out of context now and in random order....

  // Create a loop to render the crystal images.

  // for (i = 0; i < crystalImages.length; i++) {
  //   var imageCrystal = $("<img>");
  //
  //   imageCrystal.addClass("crystals");
  //
  //   imageCrystal.attr("src", crystalImages[i]);
  //
  //   $(".crystals").append(imageCrystal);
  //
  // };

  // for (j = 0; i <crystalImages.length;i++){
  //   var idNum = ["red","blue", "yellow", "green"];
  //
  //   imageCrystal.attr("id", idNum[i]);
  // };
