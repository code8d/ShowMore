const cardsName = ['mission_e', '911_carrera', '918_spyder', 'taycan', 'carrera_gt', 'cayman', 'panamera', 'cayenne']
const cardsWrapper = document.querySelector('.cards-wrapper')
const more = document.querySelector('.more')


const startCards = []

more.addEventListener('click', () => {
    showMore(cardsName)
})

function createCard(arr, i) {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('card-wrapper')

    const card = document.createElement('div')
    card.classList.add('card')

    const imageBlock = document.createElement('div')
    imageBlock.classList.add('image-block')

    const image = document.createElement('img')
    image.classList.add('image')
    image.src = `./img/${arr[i]}.jpg`

    const cardContent = document.createElement('div')
    cardContent.classList.add('card__content')

    const cardTitle = document.createElement('a')
    cardTitle.classList.add('card__title')
    cardTitle.href = '#'
    cardTitle.textContent = toUpperString(`Porsche ${arr[i].split('_').join(' ')}`)
    
    const cardSubtitle = document.createElement('div')
    cardSubtitle.classList.add('card__subtitle')
    cardSubtitle.textContent = `Laborum unde sed similique repellendus corrupti a commodi modi error atque.`

    cardWrapper.append(card)
    card.append(imageBlock)
    imageBlock.append(image)
    card.append(cardContent)
    cardContent.append(cardTitle)
    cardContent.append(cardSubtitle)

    return cardWrapper
}

function toUpperString(str) {
    const newStr = str.split(' ')

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].length === 2) {
            newStr[i] = newStr[i].toUpperCase()   
        }
    }
    return newStr.join(' ')
}

function hideCards(arr) {
    for (let i = 0; i <= 5; i++) {
        startCards.push(arr[i])
        cardsWrapper.append(createCard(arr, i))
    }
}

hideCards(cardsName)

function showMore(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (startCards.includes(cardsName[i])){
            continue
        }   else {
            startCards.push(cardsName[i])
            cardsWrapper.append(createCard(arr, i))
        }
    }
}