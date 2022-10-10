// **Iteración #3: Mix Fors**

// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada
// sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa
//  forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese
// sonido se repita como favorito en cada usuario.

// (lo que pide el ejercicio es que contemos cuantas veces se repite un sonido favorito, por
//     ejemplo, waves lo han agregado 3 usuarios, por lo tanto queremos que el código nos
//      diga que waves se repite 3 veces)

// Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un
//  buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en
//  javascript.

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

// Como buscamos saber qué sonidos se han añadido a favoritos y cuantas veces, empezamos
//declarando un onjeto vació que reciba esta información.

let addedToFavorites = {};
//Hacemos un bucle for of para recorrer el array de usuarios
for (const user of users) {
  //Dado que los sonidos están  dentro de la propiedad favoriteSounds de cada user,
  //y esta es un objeto, lo podemos recorrer con un bucle for in
  for (sound in user.favoritesSounds) {
    //Le preguntamos su los valores que recoge la clave sound de cada user ya están en
    //en nuestro array de Favoritos, si no lo están que se lo sumamos con un valor
    //inicial de uno y además, si ya están pues le decimos que vaya sumando uno cada
    //vez que vuelva a aparecer.
    if (sound in addedToFavorites) {
      addedToFavorites[sound]++;
    } else {
      addedToFavorites[sound] = 1;
    }
  }
}

console.log(addedToFavorites);
