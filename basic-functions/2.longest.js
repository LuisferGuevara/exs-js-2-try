// **Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings como argumento devuelva el más
// largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];

//Creamos la funcion
function findLongestWord(param) {
  //Creamos una variable que va a recibir retornado el valor más largo que encuentre el
  //bucle. Hacemos que esta tengo una valor inicial de 0  y/o vacio
  let longest = '';
  //Creamos un bucle que recorre el total de la longitud del param de la funcion
  for (let i = 0; i < param.length; i++) {
    //Si la longitud de algun elemento del parametro es más largo que la longitud de 
    //longest, que logest sea igual a ese valor. En el caso de que haya dos elementos con
    //misa longitud, solo se mostrará el primero ya que si la longitud no varía tampoco lo
    //hace la condición
    if(param[i].length > longest.length){
        longest = param[i]
    }
  }
  //Devolvemos el valor de longest una vez concluido el bucle.
  return longest
}


console.log('The longest string in this array is: ', findLongestWord(avengers))
