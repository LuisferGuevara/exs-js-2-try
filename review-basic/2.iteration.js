// **Iteración #2: Mix Fors**

// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos
// los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

//Como estamos buscando la media del total de volumenes, declaramos dos variables. Una 
//que será la suma total de los volumenes , y la iniciamos con valor 0. Y la otra será un
//array vacio que recibirá todas las veces que aparece volumen en en array de users, con 
//la propiedad de .length sabremos cual será la cantidad exactas de veces que salga.
let volumenTotal = 0;
let volumenTimes = [];

//Hacemos un bucle forof para recorrer cada uno de los usuarios dentro del array
for (const user of users) {
    //Buscamos la propiedad  favoriteSounds de user donde se encuentra el valor volumen.
    //Como es un objeto, lo recorremos a través de un bucle for in.
  for (property in user.favoritesSounds) {
    //Gracias al bucle podemos mandar estas propiedades a nuestro array vacio tantas veces
    //como se repitan en el array principal.

  volumenTimes.push(user.favoritesSounds[property])
  //Como la propiedad que aloja volumen es de tipo pbjeto, lo podemos recorrer nuevamente 
  //con un bucle for in y buscar entre los valores, el del volumen
    for (key in user.favoritesSounds[property]) {
    //Si el valor key dentro de esta propiedad es un número, hemos encontrado los volumenes!
    //Ahora los igualamos y sumamos a nuestra variable volumenTotal para sacar la suma total
      if (typeof user.favoritesSounds[property][key] === "number")
        volumenTotal += user.favoritesSounds[property][key];
    }
  }
}
//Como buscamos la media, divimos el total de la suma de los voumenes, por la cantidad de
//veces que aparece el valor volumen.
console.log(`The volumen average is: ${volumenTotal / volumenTimes.length}`)

