
var hours = 0;
var minutes = 0;
var seconds = 0;

var hoursPrint = 0;
var minutesPrint = 0;
var secondsPrint = 0;

var stop = 0;

var timeup = new Audio ('empanadas.mp3');

function timesUp(){
  $(".timer-countdown").addClass("hidden");
  $(".timesup").removeClass("hidden");
  $(".pause-btn").addClass("hidden");
  $(".stop-btn").addClass("hidden");
  timeup.play();
  setTimeout(function() {
    $(".start-btn").removeClass("hidden");
    $(".timesup").addClass("hidden");
    $(".timer-input").removeClass("hidden");
    stop = 1;
  }, 2000);

}

function changeHours() {
  seconds = 59;
  minutes = 59;
  hours--;
  $(".seconds-num").text(seconds);
  $(".minutes-num").text(minutes);
  if (String(hours).length === 1) {
    hoursPrint = "0" + hours;
    $(".hours-num").text(hoursPrint);
/*Si el imput té un sol dígit se li afig un 0 davant*/
  } else {
    $(".hours-num").text(hours);
  }
}

function changeMinutes() {
  seconds = 59;
  minutes--;
  $(".seconds-num").text(seconds);
  if (String(minutes).length !== 2) {
    minutesPrint = "0" + minutes;
    $(".minutes-num").text(minutesPrint);
/*Si el imput té un sol dígit se li afig un 0 davant*/
  } else {
    $(".minutes-num").text(minutes);
  }
}

function changeSeconds() {
  seconds--;
  if (String(seconds).length !== 2) {
    secondsPrint = "0" + seconds;
    $(".seconds-num").text(secondsPrint);
/*Si el imput té un sol dígit se li afig un 0 davant*/
  } else {
    $(".seconds-num").text(seconds);
  }
}

function start(){

  if (stop === 1) {
    return;
  }
  if (hours === 0 && minutes === 0 && seconds === 0) {
/*Si el contador ha arribat a 00:00:00*/
    timesUp();
  } else {
    if (hours >= 0 && minutes === 0 && seconds === 0) {
/*Si minuts i segons han arribat a 0*/
      changeHours();
/*Canvi de hores i reinici de minuts i segons*/
    } else {
      if (hours >= 0 && minutes >= 0 && seconds === 0) {
/*Si sols els segons han arribat a 0*/
        changeMinutes();
/*Canvi de minuts i reinici de segons*/
      } else {
        changeSeconds();
/*Canvi de segons*/
      }
    }
  }
  setTimeout(function() {
    start();
  }, 1000);
}


$(".start-btn").click(function(){
/*Quan el botó es clica:*/
  $(".timer-input").addClass("hidden");
  $(".timer-countdown").removeClass("hidden");
  $(".start-btn").addClass("hidden");
  $(".pause-btn").removeClass("hidden");
  $(".stop-btn").removeClass("hidden");
/*S'oculta el imput de temps i es mostra el contador*/

  hours = Number($(".hours-input").val());
  minutes = Number($(".minutes-input").val());
  seconds = Number($(".seconds-input").val());
/*S'agafa el contingut dels imputs i s'interpreten al contador*/
  if (String(hours).length === 1) {
    hoursPrint = "0" + hours;
    $(".hours-num").text(hoursPrint);
  } else {
    $(".hours-num").text(String(hours));
  }
  if (String(minutes).length !== 2) {
    minutesPrint = "0" + minutes;
    $(".minutes-num").text(minutesPrint);
  } else {
    $(".minutes-num").text(String(minutes));
  }
/*Si el imput té un sol dígit se li afig un 0 davant*/
  stop = 0;
  start();
/*S'inicia el contador*/
});

$(".stop-btn").click(function (){
/*Quan el botó es clica:*/
  stop = 1;
  hours = 0;
  minutes = 0;
  seconds = 0;
  $(".timer-input").removeClass("hidden");
  $(".timer-countdown").addClass("hidden");
  $(".start-btn").removeClass("hidden");
  $(".pause-btn").addClass("hidden");
  $(".stop-btn").addClass("hidden");

});

$(".pause-btn").click(function(){
/*Quan el botó es clica:*/
  switch (stop) {
    case 1:
      stop = 0;
      $(".pause-btn").text('Pause');
      start();
      break;

    case 0:
      stop = 1;
      $(".pause-btn").text('Resume');
      break;

    default: "WTF DUDE";

  }
});
