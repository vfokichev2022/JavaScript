function printFunStr(funStr, numRows) {
    let tmpStr = ""
    for (let i = 1; i <= numRows; i++) {
        tmpStr = tmpStr + funStr
        console.log(tmpStr)
    }
    return
}

printFunStr(":\)", 5)
printFunStr("QA30>_", 7)
