
const toggleBtn = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav-links");
const bar = document.getElementsByClassName("bar");

toggleBtn.addEventListener("click",()=>{
    navBar.classList.toggle("active");
    bar[0].classList.toggle("bar-zero");
    bar[1].classList.toggle("bar-one");
    bar[2].classList.toggle("bar-two")
})
