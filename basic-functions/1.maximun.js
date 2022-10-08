// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else if (numberTwo > numberOne) {
    return numberTwo;
  } else {
    console.log("Both numbers are the same. Try diferents values.");
  }
}

console.log(sum(5, 5));
