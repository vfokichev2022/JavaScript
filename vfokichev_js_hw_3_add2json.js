const userCards = require("./task2.json")

const userNames = userCards.map((elem) => elem["name"])

function filterCards(elem, index) {
    if (index == userNames.indexOf(elem["name"]))
        return elem
}

const newUserCards = userCards.filter(filterCards)

newUserCards.forEach((elem) => console.log(elem["name"]))
