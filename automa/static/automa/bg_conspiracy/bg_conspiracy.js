gsap.registerPlugin(Flip)
const randomizeOpponentBtn = document.querySelector('h3')
const leaders = document.querySelectorAll('.leader-box')
const confirmationBox = document.getElementById('confirmation-box')
const confirmBtn = document.getElementById('yes')
const goBackBtn = document.getElementById('no')
const randomBtn = document.querySelector('button')
const token = document.getElementById('replay-token')

confirmBtn.addEventListener('click', () => {
    token.hidden = false
    confirmationBox.hidden = true
})

goBackBtn.addEventListener('click', () => {
    leaders.forEach(l => {
        // Reset styles
        l.hidden = false
        l.style.opacity = 1
        //TODO: Just fix this hardcoded shit
        l.style.minHeight = '230px'
        l.style.maxWidth = '15%'
        l.style.minWidth = '170px'
        l.style.margin = '0.5rem'
        l.style.transform = "rotateY(0deg)"
    })

    confirmationBox.hidden = true
    randomBtn.style.visibility = 'visible'
})

leaders.forEach(leader => {
    leader.addEventListener('click', () => {
        hideCards(leader)
    })
})

function hideCards(leader){
    const cardsToHide = []
        const tl = gsap.timeline()

        leaders.forEach(l => {
            if (l.dataset.faction !== leader.dataset.faction){
                cardsToHide.push(l)
            }
        })
        randomBtn.style.visibility = 'hidden'

        tl.to(cardsToHide, {duration: 0.5, opacity: 0})
        tl.to(cardsToHide, {duration: 0.5, minWidth: 0, minHeight: 0}, "shrink")
        tl.to(leaders, {duration: 0.5, margin:0 }, "shrink")
        tl.to(cardsToHide, {hidden: true}, "end")
        tl.to(confirmationBox, {hidden: false}, "end")
}

// Choose random card
randomBtn.addEventListener('click', () => {
    randomBtn.style.visibility = 'hidden'
    const randInt = Math.floor(Math.random() * leaders.length)

    const tl = gsap.timeline()
    tl.to(leaders, {duration: 1, rotationY: 180, stagger: 0.2, ease: "back.out(2)"})
    tl.to(leaders[randInt], {duration: 1, rotationY: 0, ease: "back.out(2)"})
    tl.call(hideCards, [leaders[randInt]])
})

// Token
token.addEventListener('click', () => {
    if (token.classList.contains('faded')){
        token.classList.remove('faded')
        token.classList.add('ready')
    } else {
        token.classList.remove('ready')
        token.classList.add('faded')
    }
})