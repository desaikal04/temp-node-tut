const os = require('os');

//get user info
const user = os.userInfo();
console.log(user);

//get system uptime in seconds
console.log(`System uptime is ${os.uptime} seconds `);

//get system info
const currentOs = {
    name:os.hostname(),
    cpus:os.cpus(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);