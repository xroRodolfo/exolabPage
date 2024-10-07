
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const untoggleBtn = document.querySelector('.untoggle-btn');


navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('toggle'); // Alterna el ícono del botón hamburguesa
});


untoggleBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');  // Oculta el menú
    navToggle.classList.remove('toggle'); // Restablece el ícono del botón hamburguesa
});
