// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function sinParametros() {
  return true;
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const promesa = new Promise(() => {
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
});

// - Una función generadora de índices pares automáticos
function* generarIndices() {
  let index = 0;
  while (true) {
    index++;
    if (index % 0) {
      return index;
    }
    yield index;
  }
}

const gen = generarIndices();
console.log(gen.next().value);
