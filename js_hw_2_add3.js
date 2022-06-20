
function findQuantityLetter(letter, word) {
    const len = word.length
    let res = 0
    for (let i = 0; i < len; i++) {
        if (letter == word.charAt(i)) {
            res++
        }
    }
    return res
}

function findLetters(letters, word) {
    const len = letters.length
    let res = 0
    for (let i = 0; i < len; i++) {
        res = res + findQuantityLetter(letters.charAt(i), word)
    }
    return res
}

function getWordStructure(word) {
    const letters1 = "bcdfghjklmnpqrstvwxz"
    const letters2 = "aeiouy"
    let wordLow = word.toLowerCase()
    q1 = findLetters(letters1, wordLow)
    q2 = findLetters(letters2, wordLow)
    console.log("Слово " + word + " состоит из " + q2 + " гласных и " + q1 + " согласных букв")
}

getWordStructure("case")
getWordStructure("Case")
getWordStructure("Check-list")
