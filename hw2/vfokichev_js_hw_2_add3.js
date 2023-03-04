function findLetters(letters, word) {
    const len = letters.length
    const len_w = word.length
    let res = 0
    for (let i = 0; i < len; i++)
        for (let j = 0; j < len_w; j++)
            if (letters.charAt(i) == word.charAt(j))
                res++
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
