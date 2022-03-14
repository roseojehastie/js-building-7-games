
const cardArray = [
    
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
            name: 'pizza',
            img: 'images/pizza.png'
    },
    
    
]
cardArray.sort(() => 0.5 - Math.random())//short cut to shuffle an "ARRAY" randomly

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

//creating board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img') 
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

//Check for matches
function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    // console.log(cards)
    // console.log('check for match!')

    if (optioOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src','Images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Yoy have clicked the same image!')
    }

    else if (cardsChosen[0] == cardsChosen[1]) {
        alert('you have found a macth!')
        cards[optionOneId].setAttribute('src','Images/white.png')
        cards[optionTwoId].setAttribute('src','Images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optioOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry try again!')
    }
    
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulation You Have Found them All!'
        }
    }

//Flip cards
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout( checkMatch, 500)
    }
    
}

