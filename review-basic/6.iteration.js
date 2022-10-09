// **Iteración #6: Función swap**

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices
// del array. La función deberá intercambiar la posición de los valores de los indices que
//  hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const crazy = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

//Declaramos una función que reciba un array, y dos indices
function swap(array, indexA, indexB) {
  //Guardamos el primer indice del array dentro de una variable
  const change = array[indexA];
  //Igualamos el primer índice al segundo índice
  array[indexA] = array[indexB];
  //Igualamos el segundo indice al la variable cambio del princio, de esta forma hacemos
  //un intercambio de indies y a su vez de posiciones.
  array[indexB] = change;
  //Retornamos el array con sus indices alterados
  return array;
}
console.log(swap(crazy, 0, 2));
