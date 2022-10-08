// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para
// probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

//Declaramos la funcion y que esta reciba un argumento
function average(param) {
  //Como estaos buscando la media, creamos una variable que reciba este valor y la
  //iniciamos con valor = 0;
  let average = 0;
  //Hacemos un bucle for para que  se recorra todo el array
  for (let i = 0; i < param.length; i++) {
    //Por cada vuelta que de el bucle le sumamos a la variable average el valor de
    // de cada elemento param[i] y conseguimos la suma total del array
    average += param[i];
  }

  //Como buscamos la media, devolvemos el resultado de dividir la variable average con
  //su valor tras el bucle entre el total de elementos que contenga el array; lo que es
  //igual a la longitud total del array.
  return average / param.length;
}
console.log(average(numbers));
