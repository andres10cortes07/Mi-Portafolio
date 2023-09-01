AOS.init();


function activarPanel(){
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");
  
  
    contenedor.classList.toggle("active");
    boton.classList.toggle("active");
  }
  
  var link = document.getElementById("fileCss");
  
  function principal(){
    link.href="css/style.css";
  }
  
  function azul(){
    link.href="css/style_blue.css";
  }

  function rojo(){
    link.href="css/style_red.css";
  }

  function index_claro(){
    link.href="css/style_claro.css";
  }

  function sobre_mi_claro(){
    link.href="css/style_sobremi_claro.css";
  }

  function portafolio_claro(){
    link.href="css/style_portafolio_claro.css";
  }

  function contacto_claro(){
    link.href="css/style_contacto_claro.css";
  }