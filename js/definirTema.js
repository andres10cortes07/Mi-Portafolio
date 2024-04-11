"use strict";
AOS.init();

function activarPanel() {
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");
  
    contenedor.classList.toggle("active");
    boton.classList.toggle("active");
}

const btnOscuro = document.querySelector(".btn-oscuro");
const btnClaro = document.querySelector(".btn-claro");
let url = window.location.href;
let nombreArchivo = url.split('/').pop();
var link = document.getElementById("fileCss");

document.addEventListener("DOMContentLoaded", ()=>{
    cambiarTema()
})

btnOscuro.addEventListener("click", ()=>{
    localStorage.setItem("tema", "oscuro");
    cambiarTema()
})

btnClaro.addEventListener("click", ()=>{
    localStorage.setItem("tema", "claro");
    cambiarTema()
})

const cambiarTema = ()=> {
    if(localStorage.tema == "claro") link.href = "css/style_claro.css";
    else {
        link.href = "css/style.css"
    }
}