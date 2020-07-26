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

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
closeModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})
overlay.addEventListener('click', () =>{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})

const openModal = (modal) =>{
    if(modal ==null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
const closeModal = modal =>{
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
