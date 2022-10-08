// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos
// duplicados, en caso que existan los elimina para retornar un array sin los elementos
// duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

//Declaramos una funcino con que reciba un argumento
function removeDuplicates(param) {
  //Nuestra intencion es obtener un array sin duplicados, asi que declaramos una
  //varaible y la iniciamos con valor de array vacio.
  let arrayWithoutDuplicates = [];
  //Hacemos un bucle for que itere por todos los elementos del array param
  for (let i = 0; i < param.length; i++) {
    //Le indicamos que si nuestro array no incluye el elemento  param[i], que lo
    // incluya. Con esto evitamos que se repitan los elemtos, porque una vez incluido
    //un elemento, ya no se podrá incluir de nuevo si es igual
    if (!arrayWithoutDuplicates.includes(param[i])) {
      arrayWithoutDuplicates.push(param[i]);
    }
  }
  //Devolvemos el array una vez que termina el bucle
  return arrayWithoutDuplicates;
}
console.log(removeDuplicates(duplicates));
