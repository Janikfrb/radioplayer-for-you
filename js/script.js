dragElement(document.getElementById("playr"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "head")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "head").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
dragElement(document.getElementById("player"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
        var button = document.getElementById("pp");
var audio = document.getElementById("player");
var pg = document.getElementById("pg");
var div = document.getElementById("ct");
var bg = document.getElementById("bg");
var py = document.getElementById("playr");

button.addEventListener("click", function(){
  if(audio.paused){
    //played:
    audio.play();
    button.innerHTML = "<img src='https://img.icons8.com/dotty/100/000000/circled-pause.png'/>";
    setTimeout(function(){pg.style.animation = "";pg.innerHTML = ""}, 10)
  } else {
    audio.pause();
    button.innerHTML = "<img src='https://img.icons8.com/dotty/100/000000/play-button-circled.png'/>";
    pg.style.background = ''; 
    pg.innerHTML = "Pause!"; 
    pg.style.animation = "pg 15s infinite";

  }
});
audio.ontimeupdate = function(){
  pg.style.width = audio.currentTime / audio.duration * 100 + '%';

}
/*if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  pg.style.visibility = "hidden";
  bg.style.visibility = "hidden";
  py.style.visibility = "hidden";
  document.write("<p style='border:2px solid red;color:red;'>Es wurde ein Mobilgerät erkannt!<br>Du wirst nun auf Den Webplayer für Mobilgeräte geleitet!</p><meta http-equiv='refresh' content='2; index.mobile.php'>");
}else{
  // false for not mobile device
  pg.style.visibility = "";
  bg.style.visibility = "";
  
} */
