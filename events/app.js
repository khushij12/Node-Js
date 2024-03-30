// event - something has happened

//here this object is a class
const EventEmitter  = require('events');
const emitter = new EventEmitter();

//register an listener
emitter.on('messageLogged',function(arg){
    console.log('Listening..',arg);
});

//raise an event
emitter.emit('messageLogged',{id:1,name:"Joshua"});


