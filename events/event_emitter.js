// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it


// on - listen for an event
// emit - emit an event

customEmitter.on('response', () => {
    console.log('data recieved')
}) // format is event name and callback function
customEmitter.on('response', () => {
    console.log('some other logic')
})

customEmitter.emit('response')

customEmitter.on('response2', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`)
  })
  
  customEmitter.on('response2', () => {
    console.log('some other logic here')
  })
  
  customEmitter.emit('response2', 'Souparno', 5134)