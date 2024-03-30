const logger = require('./logger');
const ll = new logger();
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',function(arg){
    console.log('Listening..',arg);
});

ll.log("Hello");