let kelvin = 380;
// The difference between Celsius and Kelvin is that Celsius is less -273 than Kelvin
const celsius = kelvin - 273;
// Usamos const para una variable que será constante
let fahrenheit = celsius * (9 / 5) + 32;
// Usamos let para tener la variable global
fahrenheit = Math.floor(fahrenheit);
// Declaramos la variable y usamos el método .floor para rendondear el resultado y quede entero
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
// Formula para convertir celsius a Newton
newton = Math.floor(celsius);
// Redondeamos el resultado de la ecuación
console.log(`The convertion of celsius to the newton scale is ${newton}.`)