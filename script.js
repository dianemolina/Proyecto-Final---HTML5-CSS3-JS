let video=document.querySelector(".video");

let duracion=document.querySelector(".duracion").textContent="00: "+video.duration;

function reproducir(){
    video.play()
}
function pausar(){
    video.pause()
}
//  hoja juguemos

const funcionInicio=(event)=>{
    console.log("se inicio el arrastre del cohete");
    console.dir(evento.target);
 

    evento.dataTransfer.setData("Text",evento.target.src)
}