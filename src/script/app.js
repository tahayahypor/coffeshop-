npm run buildconst toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuBtn = document.querySelector(".submenu-btn");
const submenu = document.querySelector(".submenu");
const navIcon = document.querySelector(".nav-icon");
const navClose = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const cartIcon = document.querySelector(".cart-icon");
const cartClose = document.querySelector(".cart-close");
const cart = document.querySelector(".cart");

toggleThemeBtns.forEach(btn=> {
    btn.addEventListener("click" , function(){
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
}) 
submenuBtn.addEventListener("click" , ()=>{
    submenu.classList.toggle("submenu-btn")
})

navIcon.addEventListener("click" , ()=>{
     
    nav.classList.remove("-right-64");
    nav.classList.add("right-0") 
    overlay.classList.add("overlay--visible");
}) 

navClose.addEventListener("click" , ()=>{
     nav.classList.remove("right-0");
     nav.classList.add("-right-64")

     overlay.classList.remove("overlay--visible");
})

cartIcon.addEventListener("click" , ()=>{
     
    cart.classList.remove("-left-64");
    cart.classList.add("left-0") 
    overlay.classList.add("overlay--visible");
}) 

cartClose.addEventListener("click" , ()=>{
    cart.classList.remove("left-0");
    cart.classList.add("-left-64")

    overlay.classList.remove("overlay--visible");
})