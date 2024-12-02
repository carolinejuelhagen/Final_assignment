// NAVBAR
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll (".navbar__link");

toggleMenuButton.addEventListener("click", ()=>{
    navbarLinksContainer.classList.toggle("navbar__links--active");
})
