const navEmail = document.querySelector(".navbar-email");
const desktopEmailMenu = document.querySelector(".desktop-menu");
const iconMobileMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productCartDetail = document.querySelector(".product-cart-detail");
const navbarshoppingCart = document.querySelector(".navbar-shopping-cart");
const cardContainer = document.querySelector(".cards-container");
const productsList = [];

navEmail.addEventListener("click", showEmailMenu);
iconMobileMenu.addEventListener("click", showMobileMenu);
navbarshoppingCart.addEventListener("click", showProductCartDetail);

function showEmailMenu() {
  productCartDetail.classList.add("innactive");
  desktopEmailMenu.classList.toggle("innactive");
}

function showMobileMenu() {
  mobileMenu.classList.toggle("innactive");
  productCartDetail.classList.add("innactive");
}

function showProductCartDetail() {
  desktopEmailMenu.classList.add("innactive");
  mobileMenu.classList.add("innactive");
  productCartDetail.classList.toggle("innactive");
}

productsList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push({
  name: "Table",
  price: 180,
  image:
    "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productsList.push({
  name: "Desk",
  price: 190,
  image:
    "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

for (product of productsList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productName = document.createElement("p");
  productName.innerText = product.name;

  const productInfoFigure = document.createElement("figure");

  const cartImg = document.createElement("img");
  cartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoDiv.append(productName, productPrice);
  productInfoFigure.append(cartImg);
  productInfo.append(productInfoDiv, productInfoFigure);
  productCard.append(productImg, productInfo);
  cardContainer.append(productCard);
}
