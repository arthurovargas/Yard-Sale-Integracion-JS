const navEmail = document.querySelector('.navbar-email');
const desktopEmailMenu  = document.querySelector('.desktop-menu');
const iconMobileMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


navEmail.addEventListener('click', showEmailMenu);
iconMobileMenu.addEventListener('click', showMobileMenu)

function showEmailMenu(){
    desktopEmailMenu.classList.toggle('innactive');
}

function showMobileMenu(){
    mobileMenu.classList.toggle('innactive');
}