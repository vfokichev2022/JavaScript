function isPalindrom(word) {
    const len = word.length
    word = word.toLowerCase()
    n = parseInt(len / 2)
    res = false
    for (let i = 0; i < n; i++) {
        if (word.charAt(i) == word.charAt(len-i-1)) {
            res = true
        } else {
            return false
        }
    }
    return res
}

console.log("abba", isPalindrom("abba"))
console.log("Abba", isPalindrom("Abba"))
console.log("Rotor", isPalindrom("Rotor"))
console.log("Motor", isPalindrom("Motor"))
