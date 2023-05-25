const menuHamburger = document.querySelector(".info-hamburger")
const navLinks = document.querySelector(".nav-links")
const homeSet =  document.querySelector(".home")
//const background =  document.querySelector(".navbar")

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    homeSet.classList.toggle('home-set')
    //background.classList.toggle('background-out')
   
})