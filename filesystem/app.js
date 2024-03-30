const fs = require('fs') //built-in

// here we have both sync and async but we should use async only

//sync
// console.log(fs.readdirSync('./'));

//async
fs.readdir('./',function(err,result){
    if(err) console.log(err);
    else console.log(result);
});

// fs.readdir('$',function(err,result){
//     if(err) console.log(err);
//     else console.log(result);
// });

