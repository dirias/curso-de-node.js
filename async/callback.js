function hola(nombre, micallback) {
    setTimeout(function() {
      console.log("Hello, " + nombre);
      micallback(nombre);
    }, 1000);
  }
  
  function adios(nombre, otrocallback) {
    setTimeout(function() {
      console.log("Adios", nombre);
      otrocallback();
    }, 1000);
  }
  
  console.log("Iniciando");
  hola("Didier", function(nombre) {
    adios(nombre, function() {
      console.log("Terminando");
    });
  });