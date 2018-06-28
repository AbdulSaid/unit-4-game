$(document).ready(function() {
  var wins = 0;
  var losses = 0;

  // generate a random number to pop up in the beginning
  var computerPick = Math.floor(Math.random() * 1000) + 1;
  $('#randomNumber').text(computerPick);

  // generate random numbers for the jewels
  var redJewel = Math.floor(Math.random() * 1000) + 1;
  $('#redJewel').text(redJewel);

  var blueJewel = Math.floor(Math.random() * 1000) + 1;
  $('#blueJewel').text(blueJewel);

  var silverJewel = Math.floor(Math.random() * 1000) + 1;
  $('#silverJewel').text(silverJewel);

  var goldJewel = Math.floor(Math.random() * 1000) + 1;
  $('#goldJewel').text(goldJewel);
});
