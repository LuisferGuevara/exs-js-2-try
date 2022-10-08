// **Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
// y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para
// probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

//Declaramos una funcion que reciba un argumento
function averageWord(param) {
  //Declaramos una funcion que guarde el valor que estamos buscando, en este caso la
  //la media de los strins
  let average = 0;
  for (let i = 0; i < param.length; i++) {
    //Como queremos buscar solo los strings, buscanos con un if todos aquellos elementos
    //param[i] que sean del tipo string
    if (typeof param[i] === "string") {
      //Por cada vuelta hacemos que se sume a nuestra variable el valor de la longitud
      //de cada elemento
      average += param[i].length;
    }
  }

  //Devolvemos el valor divido por la longitud del argumento
  return average / param.length;
}

console.log(averageWord(mixedElements));
