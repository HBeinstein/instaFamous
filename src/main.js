import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {Player} from './player.js';

function updateStats (player) {
  $("#fame").value(player.fame.toString());
  $("#money").text(player.money);
  $("#cost-of-living").text(player.moneyAttritionVal);
}

$(document).ready(function() {
  let player = new Player();

  $('#play-button').click(function() {
    $('#landing-page-container').hide();
    $('#game-content-container').show();

    player.moneyAttrition();
    player.fameAttrition();

    updateStats(player);
    setInterval(updateStats(player), 500);
  });
});

// document.getElementById("myProgress").value = "75";