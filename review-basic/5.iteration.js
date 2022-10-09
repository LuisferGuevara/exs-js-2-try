// **Iteración #5: Función rollDice**

// Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que
// queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos
// dicho, que la función use el parametro para simular una tirada de dado y retornar el
//  resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca i
//  nformación sobre la función de javascript **Math.random();**

function rollDice(number) {
  return `Your lucky number is: ${Math.floor(Math.random() * number)}`;
}

console.log(rollDice(6));
