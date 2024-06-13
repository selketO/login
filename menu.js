document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function() {
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const initialTop = 70; // Posición inicial en px
    const scrollPosition = window.scrollY;
    const newTop = initialTop - scrollPosition;

    if (newTop > 20) {
        menuIcon.style.top = `${newTop}px`;
        menu.style.top = `${newTop}px`;
    } else {
        menuIcon.style.top = '0px'; // Posición final fija
        menu.style.top = '0px'; // Posición final fija
    }
});


document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.home, .reportes, .herramientas');
  let maxWidth = 0;

  elements.forEach(el => {
      const width = el.offsetWidth;
      if (width > maxWidth) {
          maxWidth = width;
      }
  });

  elements.forEach(el => {
      el.style.width = `${maxWidth}px`;
  });
});
