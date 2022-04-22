const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.main-nav')
const mainHeader = document.getElementById('header')

// - - - - - - - - - - TOGGLE MENU - - - - - - - - - -
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    menuToggle.classList.toggle('menu-toggle-open')
})

// - - - - - - - - - - OBSERVER - - - - - - - - - -

const mainOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px'
}

const mainHeaderObserver = new IntersectionObserver(function (entries, observer) {
    if (entries[0].isIntersecting === false)
    {
        nav.classList.remove('nav-open')
        menuToggle.classList.remove('menu-toggle-open')
    }
}, mainOptions)

mainHeaderObserver.observe(mainHeader)