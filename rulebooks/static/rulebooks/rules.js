const goTopButton = document.getElementById('topBtn')
const header = document.getElementById('header')
const scrollSpyHeader = document.getElementById('header-scrollspy')

const scrollspyNav = document.querySelector('.nav-scrollspy')
const scrollspyToggle = document.querySelector('.scrollspy-toggle')
const container = document.querySelector('.container')
const sectionNav = document.querySelectorAll('.section-nav')

// - - - - - - - - - - TOGGLE INDEX MENU - - - - - - - - - -
scrollspyToggle.addEventListener('click', () => {
    scrollspyNav.classList.toggle('nav-scrollspy-open')

    scrollspyToggle.classList.toggle('menu-toggle-open')
    if (scrollspyToggle.classList.value.includes('open')){
        scrollspyToggle.firstElementChild.innerHTML = "Chiudi"
    } else {
        scrollspyToggle.firstElementChild.innerHTML = "Indice"
    }
})

container.addEventListener('click', closeScrollspy)

sectionNav.forEach(sNav => {
    console.log('helo')
    sNav.addEventListener('click', closeScrollspy)
})

function closeScrollspy() {
    scrollspyNav.classList.remove('nav-scrollspy-open')
    scrollspyToggle.classList.remove('menu-toggle-open')
    scrollspyToggle.firstElementChild.innerHTML = "Indice"
}

// - - - - - - - - - - GO TOP BUTTON - - - - - - - - - -

goTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

// - - - - - - - - - - OBSERVER - - - - - - - - - -

const options = {
    root: null,
    threshold: 0,
    rootMargin: '0px'
}

const headerObserver = new IntersectionObserver(function (entries, observer) {
    if (entries[0].isIntersecting === false)
    {
        scrollSpyHeader.classList.add('reveal')
        scrollspyToggle.classList.add('reveal')
        goTopButton.classList.add('reveal')
    } else {
        scrollSpyHeader.classList.remove('reveal')
        scrollspyToggle.classList.remove('reveal')
        goTopButton.classList.remove('reveal')
    }
}, options)

headerObserver.observe(header)

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     goTopButton.style.display = "block";
//   } else {
//     goTopButton.style.display = "none";
//   }
// }
