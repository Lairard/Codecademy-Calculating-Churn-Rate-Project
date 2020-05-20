let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 18;

if ((runnerAge > 18) && (registeredEarly === true)) {
  console.log(`Your race number is ${raceNumber += 1000}`);
}

if ((runnerAge > 18) && (registeredEarly === true)) {
  console.log(`The race begins at 9:30 am. Your race number: ${raceNumber}`)
} else if ((runnerAge > 18) && (registeredEarly === false)) {
  console.log(`The race begins at 11:00 am. Your race number: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`The race begins at 12:30 pm. Your race number: ${raceNumber}`);
} else {
  console.log('See the registration desk');
}
