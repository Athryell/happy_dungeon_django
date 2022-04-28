gsap.registerPlugin(Flip)
const leaders = document.querySelectorAll('.leader-box')
const confirmationBox = document.getElementById('confirmation-box')
const confirmBtn = document.getElementById('yes')
const goBackBtn = document.getElementById('no')
const headline = document.querySelector('.headline')
const randomBtn = document.getElementById('rand-btn')
const token = document.getElementById('token')
const tokenImg = document.getElementById('replay-token')

const scoreTable = document.querySelector('.score-grid')
const scoreBtn = document.querySelector('.score-btn')
const leaderPoints = document.querySelectorAll('.leader-points')
const playerPoints = document.querySelectorAll('.player-points')
const leaderScore = document.querySelector('.leader-score')
const playerScore = document.querySelector('.player-score')

var checkbox = document.getElementById('checkbox-tooltip')
let totalLeaderScore = 0
let leaderFaction
let activeTooltip

document.addEventListener('load', () => {
    resetCheckbox()
})

confirmBtn.addEventListener('click', () => {
    token.style.display = 'block'
    scoreBtn.style.display = 'inline'
    randomBtn.style.display = 'none'
    confirmationBox.hidden = true
    headline.innerHTML = `Leader ${leaderFaction}`
    resetCheckbox()
})

scoreBtn.addEventListener('click', () => {
    scoreTable.style.display = 'grid'
    scoreBtn.style.display = 'none'
    resetCheckbox()
    
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
    })

    confirmationBox.hidden = true
    randomBtn.style.display = 'inline-block'
    randomBtn.style.visibility = 'visible'

    resetCheckbox()
    checkbox.parentElement.style.display = 'none'

})

// TOOLTIP
checkbox.addEventListener('change', () => {
    const tt = document.querySelectorAll('.tooltip')

    if (checkbox.checked) {
        tt.forEach(t => {
            t.style.display = 'block'
        })
    } else {
        tt.forEach(t => {
            t.style.display = 'none'
        })
    }
})

function resetCheckbox(){
    checkbox.checked = false

    const tt = document.querySelectorAll('.tooltip')

    tt.forEach(t => {
        t.style.display = 'none'
    })
}

leaders.forEach(leader => {
    leader.addEventListener('click', () => {
        hideCards(leader)
        leaderFaction = leader.dataset.faction
        checkbox.parentElement.style.display = 'block'
        randomBtn.style.display = 'none'
    })
})

// HIDE CARDS ON SELECTION
function hideCards(leader){
    const cardsToHide = []
    const tl = gsap.timeline()

    leaders.forEach(l => {
        if (l.dataset.faction !== leader.dataset.faction){
            cardsToHide.push(l)
        }
    })

    tl.to(cardsToHide, {duration: 0.5, opacity: 0})
    tl.to(cardsToHide, {hidden: true}, "end")
    tl.to(confirmationBox, {hidden: false}, "end")
        
}

// Choose random card
randomBtn.addEventListener('click', () => {
    const randInt = Math.floor(Math.random() * leaders.length)

    randomBtn.style.visibility = 'hidden'

    const tlRand = gsap.timeline()
    tlRand.to(leaders, {duration: 1, rotationY: 180, stagger: 0.2, ease: "back.out(2)"})
    tlRand.to(leaders[randInt], {duration: 1, rotationY: 0, ease: "back.out(2)"})
    tlRand.call(hideCards, [leaders[randInt]])
    tlRand.to(randomBtn, {display: 'none'})
    tlRand.to(checkbox.parentElement, {display: 'block'})

    leaderFaction = leaders[randInt].dataset.faction
})

// Token
token.addEventListener('click', () => {
    tokenImg.classList.toggle('active-token')
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