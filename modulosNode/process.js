//const proceso = require('process'); Y aviene global

process.on('exit', () => {//se desconecta totalmente del eventloop
    console.log('El proceso acabó');
})

process.on('beforeExit', () =>{
    console.log('Apunto de terminar');
})

process.on('uncaughtException', (err, origen) => {
    console.error('Se nos olvidó capturar un error');
    console.error(err.message);
})
intentando();