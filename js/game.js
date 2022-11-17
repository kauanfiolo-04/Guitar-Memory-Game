const grid = document.querySelector(".grid")

const guitars = [
  "axe",
  "blue",
  "gun",
  "jackson",
  "leaf",
  "ouija",
  "purple",
  "skull",
  "spider",
  "trevas",
]

const createElement = (tag, className) => {
  const element = document.createElement(tag)
  element.className = className
  return element
}

let firstCard = ""
let secondCard = ""

const checkEndGame=()=>{
  const disabledCards=document.querySelectorAll('.disabled_Card')
  if(disabledCards.length=== 20){
    alert('Parabéns vc ganhou!')
  }
}

const checkCards = () => {
  const firstGuitar = firstCard.getAttribute("data-guitar")
  const secondGuitar = secondCard.getAttribute("data-guitar")

  if (firstGuitar === secondGuitar) {

    firstCard.firstChild.classList.add('disabled_Card')
    secondCard.firstChild.classList.add('disabled_Card') 
      firstCard=''
      secondCard=''
      checkEndGame()

  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal_Card")
      secondCard.classList.remove("reveal_Card")

      firstCard=''
      secondCard=''

    }, 500)
  }
}

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal_Card")) {
    return
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal_Card")
    firstCard = target.parentNode
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal_Card")
    secondCard = target.parentNode

    checkCards()
  }
}

const createCard = (guitar) => {
  const card = createElement("div", "card")
  const front = createElement("div", "face front")
  const back = createElement("div", "face back")

  front.style.backgroundImage = `url('../imgs/${guitar}.jpg')`

  card.appendChild(front)
  card.appendChild(back)

  card.addEventListener("click", revealCard)
  card.setAttribute("data-guitar", guitar)

  return card
}

const loadGame = () => {
  const duplicateGuitar = [...guitars, ...guitars]

  const shuffledArray = duplicateGuitar.sort(() => Math.random() - 0.5)

  shuffledArray.forEach((guitar) => {
    const card = createCard(guitar)
    grid.appendChild(card)
  })
}

loadGame()
