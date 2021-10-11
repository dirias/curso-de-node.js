console.log('Algo');
console.info('Algo de informacíon')
console.error('Un error')
console.warn('Advertencia')
let tabla = [
    {
        a: 1,
        b: 'b'
    },
    {
        a: 1,
        b: 'b'
    },
    {
        a: 1,
        b: 'b'
    }
]
console.table(tabla)
console.group('Agrupa logs')
console.log('Hola');
console.log('Cómo estás?');
console.groupEnd('Agrupa los')

console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');