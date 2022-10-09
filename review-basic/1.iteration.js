// **Iteración #1: Mix for e includes**

// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un
// nuevo array con las categorías de las películas e imprime por consola el array de
// categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las
//  categorías puedes ayudarte de la función **.includes()**

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  { title: "Solo en Whatsapp", duration: 223, categories: ["comedia", "thriller"] },
  { title: "El gato con guantes", duration: 111, categories: ["comedia", "aventura", "animación"] },
];

//Como buscamos un array que nos diga las categorías que tenemos, declaramos una varaible
//que sea un array vacio.
let categoriesArray = [];

//Hacemos un bucle forof para iterar sobre el array movies, no necesitamos el incremento.
for (const movie of movies) {
  //Como los datos de las categorias de cada elemento del array están dentro de un array
  //nuevamente hacemos un bucle que recorra el array de las caterogias, en cada uno de los
  //elemento de movie
  for (const categories of movie.categories) {
    //Ponemos la condicion de que analice si nuestra variable no incluye algun elemento del
    //array categories dentro de cada elemento del array principal, que nos lo mande.
    //Una vez que lo incluya, si hay alguno repetido no lo metera, asi evitamos que se
    //duplique.
    if (!categoriesArray.includes(categories)) {
      categoriesArray.push(categories);
    }
  }
}
console.log(categoriesArray);
