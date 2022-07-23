console.log("I'm ready!");
// Iteration 1: Names and Input
//

const hacker1 = "Tom"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Emily"
console.log(`The driver's name is ${hacker2}`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
   console.log (`The driver has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
  console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
// 3.1 
let hacker3 ="Jonh"
let words = hacker3.toUpperCase();
console.log(words.split(''));

// 3.2
const palabraDesordenada = cadena => {
    const PalabraArreglo = cadena.split("");
    PalabraArreglo.reverse();
    const cadenaOrdenada = PalabraArreglo.join("");
    return cadenaOrdenada;
};
const hacker3 = "john";
const conLetrasOrdenadas = palabraDesordenada(hacker3);
console.log(conLetrasOrdenadas);

// 3.3

