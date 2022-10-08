// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de
// los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento
// y devuelve la suma de todos los números de la matriz.

// Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

//Declaramos una funcion que recibe un argumento

function sumAll(param) {
  //Como estamos buscando el numero total que suman todos los elementos del argumento,
  //creamos una variable que reciba esa informacion y la iniciamos con valor 0
  let total = 0;

  //Hacemos un bucle for que itere por todo el array
  for (let i = 0; i < param.length; i++) {
    //Le sumamos a la variable total el valor de cada elemento del array, y como es un 
    //bucle, por cada vuelta va a ir sumando el valor del elemento param[i] a la variable
    //total
    total += param[i]
  }

  //Devolvemos el valor resultante una vez acabado el bucle
  return total;
}
console.log(sumAll(numbers));
