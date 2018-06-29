$(document).ready(function() {
  // create initial variables
  var wins = 0;
  var losses = 0;
  var targetNumber = computerPick;
  var counter = 0;

  // generate a random number to pop up in the beginning
  var computerPick = Math.floor(Math.random() * 100) + 1;
  $('#randomNumber').text(computerPick);

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

  // on click events for the jewels
  $('#buttonRedJewel').on('click', function() {
    var redCrystalValue = redJewel;
    counter += redCrystalValue;

    if (counter === computerPick) {
      alert('You win!');
      wins++;
    } else if (counter >= computerPick) {
      alert('You lose!!');
      losses++;
    }
    // display new score into html
    $('#updatedScoreId').text('New Score: ' + counter + '!');
    $('#winsUpdated').text('You WIN!');
    $('#wins').text('Wins: ' + wins);
    $('#lossesUpdated').text('You LOSE!');
    $('#losses').text('Losses: ' + losses);
  });

  $('#buttonBlueJewel').on('click', function() {
    var blueCrystalValue = blueJewel;
    counter += blueCrystalValue;

    if (counter === computerPick) {
      alert('You win!');
      wins++;
    } else if (counter >= computerPick) {
      alert('You lose!!');
      losses++;
    }
    // display new score into html
    $('#updatedScoreId').text('New Score: ' + counter + '!');
    $('#winsUpdated').text('You WIN!');
    $('#wins').text('Wins: ' + wins);
    $('#lossesUpdated').text('You LOSE!');
    $('#losses').text('Losses: ' + losses);
  });

  $('#buttonSilverJewel').on('click', function() {
    var silverCrystalValue = silverJewel;
    counter += silverCrystalValue;

    if (counter === computerPick) {
      alert('You win!');
      wins++;
    } else if (counter >= computerPick) {
      alert('You lose!!');
      losses++;
    }
    // display new score into html
    $('#updatedScoreId').text('New Score: ' + counter + '!');
    $('#winsUpdated').text('You WIN!');
    $('#wins').text('Wins: ' + wins);
    $('#lossesUpdated').text('You LOSE!');
    $('#losses').text('Losses: ' + losses);
  });

  $('#buttonGoldJewel').on('click', function() {
    var goldCrystalValue = goldJewel;
    counter += goldCrystalValue;

    if (counter === computerPick) {
      alert('You win!');
      wins++;
    } else if (counter >= computerPick) {
      alert('You lose!!');
      losses++;
    }

    // display new score into html
    $('#updatedScoreId').text('New Score: ' + counter + '!');
    $('#winsUpdated').text('You WIN!');
    $('#wins').text('Wins: ' + wins);
    $('#lossesUpdated').text('You LOSE!');
    $('#losses').text('Losses: ' + losses);
  });
});
