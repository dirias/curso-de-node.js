let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log(`Hola ${nombre} \nMi web es ${web}`);

console.log(`Testeando nodemon 1, 2, 3 ...`)

//Las variables de entorno se escriben en mayusculas, si lleva mas de una palabra se debe separar por _
//Para desarrollo es mas facil utilizar nodemon que PM2, PM2 puede dar mas problemas que soluciones en desarrollo. 
//PM2 es enfocado a producción