const botonMenu = document.getElementById('botonMenu');
const navLinks = document.getElementById('navLinks');

if (botonMenu && navLinks) {
  botonMenu.addEventListener('click', () => {
    const abierto = navLinks.classList.toggle('abierto');
    botonMenu.setAttribute('aria-expanded', abierto);
  });

  navLinks.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', () => {
      navLinks.classList.remove('abierto');
      botonMenu.setAttribute('aria-expanded', 'false');
    });
  });
}
