
// const EventEmitter = require('events')

// const myEvent =new EventEmitter()

// myEvent.on('event',()=>{
//     console.log('event occured');
// })

// myEvent.emit('event')


const EventEmitter = require('events')

const myEvent = new EventEmitter()

myEvent.on('event',()=>{
    console.log('event occured');
})

myEvent.emit('event')