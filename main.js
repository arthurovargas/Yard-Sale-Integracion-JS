const navEmail = document.querySelector('.navbar-email');
const desktopEmailMenu  = document.querySelector('.desktop-menu');
const iconMobileMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const productCartDetail = document.querySelector('.product-cart-detail')
const navbarshoppingCart = document.querySelector('.navbar-shopping-cart')

navEmail.addEventListener('click', showEmailMenu);
iconMobileMenu.addEventListener('click', showMobileMenu)
navbarshoppingCart.addEventListener('click', showProductCartDetail)

function showEmailMenu(){
    productCartDetail.classList.add('innactive')
    desktopEmailMenu.classList.toggle('innactive');
}

function showMobileMenu(){
    mobileMenu.classList.toggle('innactive');
    productCartDetail.classList.add('innactive');
}

function showProductCartDetail(){
    desktopEmailMenu.classList.add('innactive');
    mobileMenu.classList.add('innactive');
    productCartDetail.classList.toggle('innactive');
}