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
        document.body.style.overflowY = "hidden";
        document.querySelector("section").style.display = "none"
        document.querySelector(".code-loader").style.animation = "desaparecer 2s forwards";

        setTimeout(() => {
            document.querySelector("section").style.display = "block"
            document.body.style.overflowY = "auto"
        }, 2000);
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    cambiarTema();
})


if (document.querySelector(".code-loader")) {
    document.querySelector("section").style.animation = "aparecer .5s forwards";
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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))