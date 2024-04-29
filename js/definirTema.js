"use strict";
AOS.init();

//si el usuario abre la pagina por primera vez definimos el tema por defecto
if (!localStorage.getItem("tema")) localStorage.setItem("tema", "oscuro")

var link = document.getElementById("fileCss");
const botonTema = document.querySelector(".open-panel")
const menuTema = document.querySelector(".tema-menu")
const grupo = [botonTema, menuTema]

const cambiarTema = ()=> {
    if(localStorage.tema == "claro") link.href = "css/style_claro.css";
    else link.href = "css/style.css"
}

var ruta = window.location.pathname;
var partesRuta = ruta.split('/');
var nombreArchivo = partesRuta[partesRuta.length - 1];

if (nombreArchivo == "index.html"){
    document.addEventListener("DOMContentLoaded", ()=>{
        cambiarTema();
        document.querySelector("section").style.display = "none"
        setTimeout(() => {
            document.querySelector(".code-loader").style.animation = "desaparecer 1s forwards";
            document.querySelector("section").style.display = "block"
            document.body.style.overflowY = "hidden";
    
            setTimeout(() => {
                document.body.style.overflowY = "auto"
            }, 1500);
        }, 1000);
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    cambiarTema();
})


if (document.querySelector(".code-loader")) {
    document.querySelector("section").style.animation = "aparecer 5s forwards";
}

grupo.forEach(item => {
    item.addEventListener("click", (e)=>{
        e.preventDefault();
        let temaActual = localStorage.getItem("tema");
        if (temaActual == "oscuro") localStorage.setItem("tema", "claro")
        else localStorage.setItem("tema", "oscuro")
        cambiarTema()
    });
})