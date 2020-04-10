document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
            name: 'eyes',
            img: 'images/eyes.png'
        },
        {
            name: 'flushed',
            img: 'images/flushed.png'
        },
        {
            name: 'smile',
            img: 'images/smile.png'
        },
        {
            name: 'think',
            img: 'images/think.jpg'
        },
        {
            name: 'watch',
            img: 'images/watch.jpg'
        },
        {
            name: 'tony',
            img: 'images/tony.jpg'
        },
        {
            name: 'eyes',
            img: 'images/eyes.png'
        },
        {
            name: 'flushed',
            img: 'images/flushed.png'
        },
        {
            name: 'smile',
            img: 'images/smile.png'
        },
        {
            name: 'think',
            img: 'images/think.jpg'
        },
        {
            name: 'watch',
            img: 'images/watch.jpg'
        },
        {
            name: 'tony',
            img: 'images/tony.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChosen = []
    var cardChosenId = []
    var chosen = []
    var cardsWon = []

    //create gameboard
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/tile.jpg')
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneID = cardChosenId[0]
        const optionTwoID = cardChosenId[1]
        console.log(optionOneID + " and " + optionTwoID)
        if (cardChosen[0] === cardChosen[1]) {
            alert('You found a match!')
            cards[optionOneID].setAttribute('src', 'images/white.jpg')
            cards[optionTwoID].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardChosen)
        } else {
            cards[optionOneID].setAttribute('src', 'images/tile.jpg')
            cards[optionTwoID].setAttribute('src', 'images/tile.jpg')
            alert("Sorry, try again!")
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    //flip card

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        chosen.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})