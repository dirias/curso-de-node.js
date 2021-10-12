const os = require('os');

console.log(os.arch())
console.log(os.platform());
console.log(os.cpus());
//Senales del sistema
//console.log(os.constants);

function kb(bytes) {return bytes / 1024}
//Memoria disponible
console.log(kb(os.freemem()));
console.log(kb(os.totalmem()));
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());