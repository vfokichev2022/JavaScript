function pow2(n) {
    let res = 1
    for (let i = 1; i <= n; i++) {
        res = res * 2
    }
    return res
}

console.log('2^3 =', pow2(3))
console.log('2^10 =', pow2(10))
