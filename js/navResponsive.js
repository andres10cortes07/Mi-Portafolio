const navResponsive = () => {
    return `
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MI PORTAFOLIO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark w-75" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">Franklin Cortés</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link a-home" aria-current="page" href="">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link a-sobre-mi" href="">Sobre Mí</a>
            </li>
            <li class="nav-item">
              <a class="nav-link a-portafolio" href="">Portafolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link a-contacto" href="">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link tema-menu" href="#" role="button">
                Cambiar tema
              </a>
            </li>


        </div>
      </div>
    </div>
  </nav>
    `
}