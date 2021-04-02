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
           return true  
        } else {
           return false
        }
    }

    mostSkilledDev = (person) => {
        if(this.language.length > person.language.length) {
            console.log(`${this.firstName} knows more languages than ${person.firstName}`)
        } else if (this.language.length === person.language.length) {
            console.log(`It's a draw`)
        } else {
            console.log(`${this.firstName} knows more languages than ${person.firstName}`)
        }
    }
}

exports.Human = Human
