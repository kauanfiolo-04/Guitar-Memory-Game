const grid=document.querySelector('.grid')

const guitars=[
    'axe',
    'blue',
    'gun',
    'jackson',
    'leaf',
    'ouija',
    'purple',
    'skull',
    'spider',
    'stratocaster',
    'telecaster',
    'trevas'
]

const createElement=(tag,className)=>{
    const element=document.createElement(tag)
    element.className=className
    return element
}

const createCard=(guitar)=>{
    const card=createElement('div','card')
    const front=createElement('div','face front')
    const back=createElement('div','face back')

    front.style.backgroundImage = `background-image:url('../imgs/${guitar}.jpg');`

    card.appendChild(front)
    card.appendChild(back)

    return card
}

const loadGame=()=>{
    guitars.forEach((guitar)=>{
        const card=createCard(guitar)
        grid.appendChild(card)
    })
}

loadGame()