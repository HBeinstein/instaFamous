import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {Player} from './player.js';


function setPlayerStats (player) {
  $("#fame").val(player.fame.toString()); 
  $("#money").text(Math.round(player.money));
  $("#cost-of-living").text(player.moneyAttritionVal);

  if (player.hasLost === true) {
    $('#game-content-container').html('<iframe src="https://giphy.com/embed/AZ3JijLC67CrS" width="480" height="338" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/benihime99-AZ3JijLC67CrS">via GIPHY</a></p>');
  }

  if (player.hasWon === true) {
    $('#game-content-container').html('<iframe src="https://giphy.com/embed/cOtvwSHKaFK3Ul1VVu" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/memecandy-cOtvwSHKaFK3Ul1VVu">via GIPHY</a></p>');
  }
}

function disableButtons (time) {
  $(".hide-button").hide();
  setTimeout(() =>{$(".hide-button").show()}, time);
}

$(document).ready(function() {
  let player = new Player();
  
  //const letMeTakeASelfie = new Audio('../assets/selfie.mp3');
  // letMeTakeASelfie.src = '../assets/selfie.mp3';

  $('#play-button').click(function() {
    $('#landing-page-container').hide();
    $('#game-content-container').show();

    player.moneyAttrition();
    player.fameAttrition();

    setPlayerStats(player);
    setInterval(() =>{setPlayerStats(player)}, 500);
  });

  $('#selfie').click(function() {
    //letMeTakeASelfie.play();
    if (player.isBusy === false) {
      disableButtons(5000);
      player.takeSelfies();

      $('#game-content-container').html('<iframe src="https://giphy.com/embed/gLEAY6n7qAhh8OXmEn" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/NoraFromQueens-awkwafina-is-nora-from-queens-gLEAY6n7qAhh8OXmEn">via GIPHY</a></p>');

      setTimeout(() =>{$('#game-content-container').html("")}, 5000);
    }
  });

  $('#work').click(function() {
    if (player.isBusy === false) {
      player.work();
      disableButtons(10000);

      $('#game-content-container').html('<iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/JIX9t2j0ZTN9S">via GIPHY</a></p>');

      setTimeout(() =>{$('#game-content-container').html("")}, 10000);
    }
  });

  $('#free-stuff').click(function() {
    if (player.isBusy === false) {
      disableButtons(5000);
      player.getFreeStuff();

      $('#game-content-container').html('<iframe src="https://giphy.com/embed/DB2oahQFa0qeQ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/finding-nemo-roman-reigns-dean-ambrose-DB2oahQFa0qeQ">via GIPHY</a></p>');

      setTimeout(() =>{$('#game-content-container').html("")}, 5000);
    }
  });

  $('#live-lavishly').click(function() {
    if (player.isBusy === false) {
      disableButtons(8000);
      player.liveLavishly();

      $('#game-content-container').html('<iframe src="https://giphy.com/embed/kGcnaAzTSClqywU7S8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kesha-pray-blessed-bitch-im-kGcnaAzTSClqywU7S8">via GIPHY</a></p>');
      setTimeout(() =>{$('#game-content-container').html("")}, 8000);
    }
  });

  $('#advertise').click(function() {
    if (player.isBusy === false) {
      disableButtons (10000);
      player.advertiseProducts();

      $('#game-content-container').html('<iframe src="https://giphy.com/embed/WRcYO7MFySbjDEt5wW" width="480" height="256" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/snl-saturday-night-live-season-44-WRcYO7MFySbjDEt5wW">via GIPHY</a></p>');
      setTimeout(() =>{$('#game-content-container').html("")}, 10000);
    }
  });

  $('#insta-image').click(function() {
    if (player.instaImageFlag === false) {
      player.instaImage();
      $("#insta-image").hide();

      // $('#game-content-container').html('<iframe src="https://giphy.com/embed/cNTZ2Ln1Q1ZZAODLbj" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rka-ink-awkward-marketing-cNTZ2Ln1Q1ZZAODLbj">via GIPHY</a></p>');
      // setTimeout(() =>{$('#game-content-container').html("")}, 30000);

      setInterval(() =>{$("#insta-image").show()}, 30000);

    }
  });

});