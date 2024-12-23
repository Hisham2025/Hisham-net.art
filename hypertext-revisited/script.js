var i=0;
var txt='The Impossible Mission Force (IMF) have received word of a Russian Airbus A400M taking off shortly from Minsk, Belarus with WMDs on board. The mission of three IMF members, Ethan Hunt, Luther Stickell, and Benjamin (Benji) Dunn, should they choose to accept it, is to prevent the aircraft from leaving with the WMDs, or the whole world will be at risk. As always, should you or any member of your IMF team be caught or killed, the secretary will disavow all knowledge of your actions. Do you accept your mission?';
var speed=40;

function typeWriter(){
    if (i<txt.length){
        document.getElementById("mission").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

var x = document.getElementById("myAudio");

function playAudio(){
    
    x.play();

}

document.getElementById("toggle").addEventListener("click",toggleVis);
function toggleVis(){
  frm = document.getElementById("frame");
  if(frm.style.visibility != "visible"){
    frm.style.visibility = "visible";
  }
  else{
    frm.style.visibility = "hidden";}}