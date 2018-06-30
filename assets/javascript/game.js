$(document).ready(function() {
  // generate a random number to pop up in the beginning
  var computerPick = Math.floor(Math.random() * 100) + 1;
  $('#randomNumber').text(computerPick);

  // create initial variables
  var wins = 0;
  var losses = 0;
  var counter = 0;

  // generate random numbers for the jewels
  var redJewel = Math.floor(Math.random() * 10) + 1;
  $('#redJewel').text(redJewel);

  var blueJewel = Math.floor(Math.random() * 10) + 1;
  $('#blueJewel').text(blueJewel);

  var silverJewel = Math.floor(Math.random() * 10) + 1;
  $('#silverJewel').text(silverJewel);

  var goldJewel = Math.floor(Math.random() * 10) + 1;
  $('#goldJewel').text(goldJewel);

  // hide numbers for jewels
  document.getElementById('redJewel').style.cssText = 'display: none';
  document.getElementById('blueJewel').style.cssText = 'display: none';
  document.getElementById('silverJewel').style.cssText = 'display: none';
  document.getElementById('goldJewel').style.cssText = 'display: none';

  var checkWin = function(value) {
    counter += value;
    if (counter === computerPick) {
      alert('You win!');
      wins++;
      $('#winsUpdated2').text('You WIN!');
      $('#wins2').text('Wins: ' + wins);
      $('#lossesUpdated2').text('');
      reset();
    } else if (counter >= computerPick) {
      alert('You lose!!');
      losses++;
      $('#lossesUpdated2').text('You LOSE!');
      $('#losses2').text('Losses: ' + losses);
      $('#winsUpdated2').text('');
      reset();
    }
    // display new score into html
    $('#updatedScoreId').text('New Score: ' + counter + '!');
  };

  // on click events for the jewels
  $('#buttonRedJewel').on('click', function() {
    var redCrystalValue = redJewel;
    checkWin(redCrystalValue);
  });

  $('#buttonBlueJewel').on('click', function() {
    var blueCrystalValue = blueJewel;
    checkWin(blueCrystalValue);
  });

  $('#buttonSilverJewel').on('click', function() {
    var silverCrystalValue = silverJewel;
    checkWin(silverCrystalValue);
  });

  $('#buttonGoldJewel').on('click', function() {
    var goldCrystalValue = goldJewel;
    checkWin(goldCrystalValue);
  });

  var reset = function() {
    redJewel = Math.floor(Math.random() * 10) + 1;
    $('#redJewel').text(redJewel);

    blueJewel = Math.floor(Math.random() * 10) + 1;
    $('#blueJewel').text(blueJewel);

    silverJewel = Math.floor(Math.random() * 10) + 1;
    $('#silverJewel').text(silverJewel);

    goldJewel = Math.floor(Math.random() * 10) + 1;
    $('#goldJewel').text(goldJewel);

    computerPick = Math.floor(Math.random() * 100) + 1;
    $('#randomNumber').text(computerPick);

    counter = 0;
  };
});
