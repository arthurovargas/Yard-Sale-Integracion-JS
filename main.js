const navEmail = document.querySelector('.navbar-email');
const desktopEmailMenu  = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', showEmailMenu);

function showEmailMenu(){
    desktopEmailMenu.classList.toggle('innactive');
}