//Define a 'kelvin' variable
let kelvin = 293;

//Define a 'celsius' variable by substracting 273 from 'kelvin'
let celsius = kelvin - 273;

//Converting fahrenheit from celsius
let fahrenheit = celsius * (9/5) + 32;

const temperature = Math.floor(fahrenheit);
//Printing...

console.log(`The temperature is ${temperature} degrees Fahrenheit.`);

const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton.`)
