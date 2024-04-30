//  hoja juguemos

// primer img

let imagen1=document.querySelector("#img1");

imagen1.addEventListener("dragstart",(evento)=>{
 });

let lugar2=document.querySelector(".segundaImg");

lugar2.addEventListener("dragover",(evento)=>{
    evento.preventDefault()
});


lugar2.addEventListener("drop",(evento)=>{
    lugar2.appendChild(imagen1)
    document.querySelector(".textoRompe2").style.display="none"
    
});

// segunda img

let imagen2=document.querySelector("#img2");

imagen2.addEventListener("dragstart",(evento)=>{
});

let lugar1=document.querySelector(".primeraImg");

lugar1.addEventListener("dragover",(evento)=>{
   evento.preventDefault()
});

lugar1.addEventListener("drop",(evento)=>{
   lugar1.appendChild(imagen2)
   document.querySelector(".textoRompe1").style.display="none"
   
});


// tercer img

let imagen3=document.querySelector("#img3");

imagen3.addEventListener("dragstart",(evento)=>{
});

let lugar3=document.querySelector(".tercerImg");

lugar3.addEventListener("dragover",(evento)=>{
   evento.preventDefault()
});

//let textoRompe2=document.querySelector(".textoRompe1")
lugar3.addEventListener("drop",(evento)=>{
   lugar3.appendChild(imagen3)
   document.querySelector(".textoRompe3").style.display="none"
   
});



//funcion reinicio

function reinicio() {
   window.location.reload();
}