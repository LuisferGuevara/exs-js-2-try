// **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que
// existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos
// devuelve la posición de dicho elemento y por la contra un false. Puedes usar este array
// para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

//   Declaramos una función que reciba dos argumentos, uno psera el array  donde buscar
// y el otro sera el elemento a buscar dentro de ese array
function finderName(param, nameToFind) {
  //Hacemos un bucle para iterar sobre todo el array
  for (let i = 0; i < param.length; i++) {
    //Indicamos que si algun elemento del array es igual al valor del sugndo parametro,
    //es decir al nombre que esrtamos buscando que nos devuelva un true, porque existe
    // y ademas que no devuelva el indice de posicion dentro de dicho array
    if (param[i] === nameToFind) {
      return `it exists?: ${true} and its position is: ${i}`;
    }
  }

  //En caso de que no exista el nombre que buscamos tras realizar la búsqueda en el bucle,
  //retornamos un false, porque no existe.
  return false;
}

console.log(finderName(nameFinder, "Logan"));
