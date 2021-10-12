const { exec, spawn } = require('child_process'); //- const exec = require('chiled_process').exec;

// exec('node modulosNode/console.js', (err, stdout, sterr) => {
//     if (err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let proceso = spawn('ls', ['-la'])
console.log(proceso.pid);
console.log(proceso.killed);
console.log(proceso.connected);
proceso.stdout.on('data', (data) => {
    console.log(data.toString());
})
proceso.on('exit', () => {
    console.log('El proceso terminó');
    console.log(proceso.killed);
})
