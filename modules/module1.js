// const secret = "SUPER SECRET"
// const john = "John"
// const peter = "peter"

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

const names = require('./module2')
console.log(names)
const sayHi = require('./module3')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)