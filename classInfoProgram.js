const { Human } = require('./classInfo.js')

const alice = new Human('Alice', 'Liddell', 28,  ['Javascript', 'C'])

const bob = new Human('Bob', 'Lemon', 18,  ['Javascript', 'C', 'Rust'])

bob.mostSkilledDev(bob, alice)
bob.printInfo()
bob.canVote()