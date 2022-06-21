function pow2(n) {
    let res = 1
    for (let i = 1; i <= n; i++) {
        res = res * 2
        console.log("2^" + i + "=", res)
    }
    return res
}

pow2(10)
