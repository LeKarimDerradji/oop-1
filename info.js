const alice = {
    firstName: 'Alice',
    lastName: 'Liddell',
    age: 28,
    language: ['Javascript', 'C']
}

const bob = {
    firstName: 'Bob',
    lastName: 'Lemon',
    age: 30,
    language: ['Javascript', 'C', 'Rust']
}

const charlie = {
    firstName: 'Charlie',
    lastName: 'Charlot',
    age: 8,
    language: ['Javascript', 'C', 'Rust']
}

const printInfo = (obj) => {
        console.log(obj.firstName + ' ' + obj.lastName + ', ' + obj.age + ' years old.')
}

printInfo(alice)
printInfo(bob)
printInfo(charlie)

const canVote = (obj) => {
    if(obj.age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(canVote(alice))
console.log(canVote(bob))

canVote(bob)
canVote(charlie)

const mostSkilledDev = (personOne, personTwo) => {
    if(personOne.language.length > personTwo.language.length) {
        console.log(`${personOne.firstName} knows more languages than ${personTwo.firstName}`)
    } else if (personOne.language.length === personTwo.language.length) {
        console.log(`It's a draw`)
    } else {
        console.log(`${personTwo.firstName} knows more languages than ${personTwo.firstName}`)
    }
}

mostSkilledDev(alice, bob)
mostSkilledDev(alice, charlie)
mostSkilledDev(bob, charlie)




