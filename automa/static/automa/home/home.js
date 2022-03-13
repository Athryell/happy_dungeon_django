const bar = document.querySelector('.bar')
const inputSearch = document.querySelector('input')
const games = document.querySelectorAll('.game-containers')

// Search bar
bar.addEventListener('click', () => {
    bar.style.transform = 'rotateY(0)'
    inputSearch.focus()
})

inputSearch.addEventListener('blur', () => {
    bar.style.transform = 'rotateY(90deg) translateX(100px)'
})

inputSearch.addEventListener('keyup', () => {
    games.forEach(g => {
        if (g.dataset.tags.includes(inputSearch.value.toLowerCase()))
        {
            console.log(`includes: ${inputSearch.value}`  )
            g.hidden = false
        }else{
            console.log(`NOT include: ${inputSearch.value}`  )
            g.hidden = true
        }
    }) 
})

