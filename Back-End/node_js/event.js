let event = require('events')

let eventEmitter = new event.EventEmitter()

eventEmitter.on('play' , function () {
    console.log('the players start game ')
})

eventEmitter.addListener('play' , function () {
    console.log(' i am listening')
})

eventEmitter.emit('play')

