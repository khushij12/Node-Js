const os = require('os') //built-in

var total = os.totalmem();
var free = os.freemem();

console.log(`Used memory: ${total-free}`);

//good thing about node is that before when code is run in browser we only get information related to document or window but not related to 
// operating system or file system but now we can get related information using node.

//info about the user
const info = os.userInfo()
console.log(info)

//method to return the uptime for pc
console.log(`Uptime is ${os.uptime()} seconds`);

const osDetails = {
    name:os.type(),
    release:os.release(),
}

console.log(osDetails);