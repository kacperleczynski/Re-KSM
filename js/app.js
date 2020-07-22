const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
})
$(window).on("scroll", () =>{
    if($(window).scrollTop()){
        $('header').addClass('blue')
    }else{
        $('header').removeClass('blue')
    }
})