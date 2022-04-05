const menuToggle = document.querySelector('.menu-toggle')

// - - - - - - - - - - TOGGLE MENU - - - - - - - - - -
menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('nav-open')

    menuToggle.classList.toggle('menu-toggle-open')
})
