// **Iteración #1: Usa includes**

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la
// palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let index = 0; index < products.length; index++) {
  if (products[index].includes("Camiseta".toLowerCase)) {
    console.log(products[index]);
  }
}

// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y
// añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas
// compruébalo con un ***console.log***.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (const alumn of alumns) {
  if ((alumn.T1 && alumn.T2) || (alumn.T1 && alumn.T3) || (alumn.T2 && alumn.T3))
    alumn.isApproved = true;
  else {
    alumn.isApproved = false;
  }
}
console.log(alumns);

// **Iteración #3: Probando For...of**

// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un *
// **console.log*** sus valores.Puedes usar este array:

const placesToTravel = ["Japon", "Venecia", "Murcia", "Santander", "Filipinas", "Madagascar"];

for (const place of placesToTravel) {
  console.log(place);
}

// **Iteración #4: Probando For...in**

// Usa un **for...in** para imprimir por consola los datos del alienígena..
// Puedes usar este objeto:
const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (key in alien) {
  console.log(`The property: ${key}, has the value of: ${alien[key]}`);
}

// **Iteración #5: Probando For**

// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos
// que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let i = 0; i < placesToTravel2.length; i++) {
  const element = placesToTravel2[i];
  if (element.id === 11 || element.id === 40) {
    placesToTravel2.splice(i, 1);
  }
}
console.log(placesToTravel2);

// **Iteración #6: Mixed For e includes**

// Usa un bucle **for** para recorrer todos los juguetes y elimina los que incluyan la
// palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.
// Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (let i = 0; i < toys.length; i++) {
   if(toys[i].name.includes('gato')){
    toys.splice(i,1);
    i--;
   }
}

console.log(toys);