import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {Player} from './player.js';


function setPlayerStats (player) {
  $("#fame").val(player.fame.toString()); 
  $("#money").text(player.money);
  $("#cost-of-living").text(player.moneyAttritionVal);
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
    player.takeSelfies();
  });

  $('#work').click(function() {
    player.work();
  });

  $('#free-stuff').click(function() {
    player.getFreeStuff();
  });

  $('#live-lavishly').click(function() {
    player.liveLavishly();
  });

  $('#advertise').click(function() {
    player.advertiseProducts();
  });

  $('#insta-image').click(function() {
    player.instaImage();
  });
});


// id="selfie"
// id="work"
// id="free-stuff">
// id="live-lavishly"
// id="advertise"n>
// id="insta-image"