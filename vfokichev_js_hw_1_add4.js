function checkAge(age) {
    if (typeof(age) == "number" || !isNaN(age)) {
        age = Number(age)
    } else {
        console.log("age " + age + " is not number")
        alert("age " + age + " is not number")
        return
    }  
    let age_1 = age
    let age_2 = 18
    let age_3 = 60
    console.log("age_1=", age_1)
        if (age_1 < age_2){
            console.log("You don't have access cause your age is " + age_1 +  " It's less then ")
            alert("You don't have access cause your age is " + age_1 +  " It's less then ")
        } else if (age_1 >=  age_2 & age_1 <  age_3) {
            console.log("Welcome  !")
            alert("Welcome  !")
        } else if (age_1  > age_3){
            console.log("Keep calm and look Culture channel")
            alert("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
            alert("Technical work")
        } 
}

checkAge(prompt("Enter you age", 35))
