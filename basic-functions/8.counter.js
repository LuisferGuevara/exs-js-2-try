// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las
// palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
//Declaramos una funcion que acepta un argumento, que sera un array
function repeatCounter(param) {
  //Como queremos obtener tanto el elemento como la cantidad de veces que este se
  //repite, el mejor tipo de dato que podemos declarar para recibir esta informacion
  //es un objeto, que iniciamos vacio.
  let cont = {};

  //Hacemos un bucle que recorra todo el array
  for (let i = 0; i < param.length; i++) {
    //Usamos un for in, is in es este caso, para poder recorrer nuestro onjeto.
    //Añadimos como propiedad del objeto los elemento del array, param[i]; y atraves
    // del ++ si es el mismo elemento que sume uno,
    if (param[i] in cont) {
      cont[param[i]]++;
    } else {
      //Indicaque que se añada la propiedad param[i] a nuestro objeto, con un valor
      //inicial de 1 como mínimo.
      cont[param[i]] = 1;
    }
  }
  //Retornamos el objeto una vez concliudo el bucle con sus condiciones
  return cont;
}

console.log(repeatCounter(counterWords));
