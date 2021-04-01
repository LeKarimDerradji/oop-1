class Human {
    constructor(firstName, lastName, age, language) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.language = language
    }
    printInfo() {
        console.log(this.firstName + ' ' + this.lastName + ', ' + this.age + ' years old.')
    }

    canVote() {
        if(this.age >= 18) {
            console.log(true) 
        } else {
            console.log(false)
        }
    }

    mostSkilledDev = (objectOne, objectTwo) => {
        if(objectOne.language.length > objectTwo.language.length) {
            console.log(`${objectOne.firstName} knows more languages than ${objectTwo.firstName}`)
        } else if (objectOne.language.length === objectTwo.language.length) {
            console.log(`It's a draw`)
        } else {
            console.log(`${objectTwo.firstName} knows more languages than ${objectOne.firstName}`)
        }
    }
}

exports.Human = Human