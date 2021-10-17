const sharp = require('sharp');

sharp('original.png').resize(80).grayscale.toFile('resized.png')

//Permitar manipular imagenes y redimencionarlas