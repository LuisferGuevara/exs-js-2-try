// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos
//y  un texto y devuelve la posición del array cuando el valor del array sea igual al valor
//del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función:
// function findArrayIndex(array, text) {}
// Ej array:

const names = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (text === array[i]) {
      return `Your name: ${text} exist? ${true}!!  and its positios is: ${array.indexOf(array[i])}`;
    }
  }
  return `The existence of you name ${text} is ${false}`;
}

console.log(findArrayIndex(names, "Caracol"));
console.log(findArrayIndex(names, "Salamandra"));
console.log(findArrayIndex(names, "Luisfer"));
