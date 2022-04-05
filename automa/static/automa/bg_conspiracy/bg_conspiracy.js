gsap.registerPlugin(Flip)
const leaders = document.querySelectorAll('.leader-box')
const confirmationBox = document.getElementById('confirmation-box')
const confirmBtn = document.getElementById('yes')
const goBackBtn = document.getElementById('no')
const randomBtn = document.querySelector('button')
const token = document.getElementById('replay-token')
const headline = document.querySelector('.headline')
const scoreBtn = document.querySelector('.score-btn')
const leaderPoints = document.querySelectorAll('.leader-points')
const playerPoints = document.querySelectorAll('.player-points')
const leaderScore = document.querySelector('.leader-score')
const playerScore = document.querySelector('.player-score')
const scoreTable = document.querySelector('.score-box')
let totalLeaderScore = 0
let leaderFaction
let activeTooltip

confirmBtn.addEventListener('click', () => {
    token.style.display = 'block'
    scoreBtn.style.display = 'inline'
    confirmationBox.hidden = true
    headline.innerHTML = `Leader ${leaderFaction}`
})

scoreBtn.addEventListener('click', () => {
    scoreTable.style.display = 'block'
    scoreBtn.style.display = 'none'
    // Reset inputs
    leaderPoints.forEach(lp => {
        lp.value = ''  
    })
    playerPoints.forEach(pp => {
        pp.value = ''  
    })
})

goBackBtn.addEventListener('click', () => {

    gsap.set(leaders, { clearProps: "all" })
    leaders.forEach(l => {
        l.hidden = false
        l.removeEventListener('mouseenter', activateTooltip)
        l.removeEventListener('mouseleave', inactivateTooltip)
    })

    confirmationBox.hidden = true
    randomBtn.style.visibility = 'visible'
})

// TOOLTIP
leaders.forEach(leader => {
    leader.addEventListener('click', () => {
        hideCards(leader)
        leaderFaction = leader.dataset.faction
        activeTooltip = leader.querySelectorAll('.tooltip')
        leader.addEventListener('mouseenter', activateTooltip)
        leader.addEventListener('mouseleave', inactivateTooltip)
    })
})

function activateTooltip(){
    activeTooltip.forEach(t => {
        t.style.display = 'block'
    })
}

function inactivateTooltip(){
    activeTooltip.forEach(t => {
        t.style.display = 'none'
    })
}

// HIDE CARDS ON SELECTION
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

    const tlRand = gsap.timeline()
    tlRand.to(leaders, {duration: 1, rotationY: 180, stagger: 0.2, ease: "back.out(2)"})
    tlRand.to(leaders[randInt], {duration: 1, rotationY: 0, ease: "back.out(2)"})
    tlRand.call(hideCards, [leaders[randInt]])
    leaderFaction = leaders[randInt].dataset.faction
})

// Token
token.addEventListener('click', () => {
    token.classList.toggle('active')
})

// Score
leaderPoints.forEach(lp => {
    lp.addEventListener('input', () => {
        let res = 0

        leaderPoints.forEach(lPnts => {
            let value = parseInt(lPnts.value)
            if (isNaN(value))
                return

            res += value
        })  

        leaderScore.innerHTML = res
    })  
})

playerPoints.forEach(pp => {
    pp.addEventListener('input', () => {
        let res = 0

        playerPoints.forEach(pPnts => {
            let value = parseInt(pPnts.value)
            if (isNaN(value))
                return

            res += value
        })  

        playerScore.innerHTML = res
    })  
})