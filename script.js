let video=document.querySelector(".video");

let duracion=document.querySelector(".duracion").textContent="00: "+video.duration;

function reproducir(){
    video.play()
}
function pausar(){
    video.pause()
}