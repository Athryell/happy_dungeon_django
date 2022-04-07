const bar = document.querySelector('.bar')
const inputSearch = document.querySelector('input')
const games = document.querySelectorAll('.game-containers')

// Search bar
bar.addEventListener('click', () => {
    bar.style.transform = 'rotateY(0)'
    inputSearch.focus()
})

inputSearch.addEventListener('blur', () => {
    if(inputSearch.value.trim() === ''){
        bar.style.transform = 'rotateY(90deg) translateX(100px)'
    }
})

inputSearch.addEventListener('keyup', () => {
    games.forEach(g => {
        const gameTags = g.dataset.tags.toLowerCase()
        const gameTitle = g.dataset.title.toLowerCase()
        const userInput = inputSearch.value.toLowerCase().trim()

        if ((gameTags.includes(userInput)) || (gameTitle.includes(userInput)))
        {
            g.hidden = false
        }else{
            g.hidden = true
        }
    }) 
})

