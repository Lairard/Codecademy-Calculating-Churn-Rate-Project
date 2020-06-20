const input = 'turpentine and turtles'
const vowels = ['a', 'i', 'u', 'e', 'o'];

let inputer = []
let resultArray = []

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
          if(input[i] === "e") {
            resultArray.push("ee");
          }
          else if(input[i] === "u") {
            resultArray.push("uu");
          }
          else {
            resultArray.push(vowels[j]);
          }
          /*if (input[i] === 'e' || input[i] === 'u') {
          myArray.push(input[i]);*/
      }

  }
}

console.log(resultArray.join("").toUpperCase());

