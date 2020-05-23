//how many hours did you slept last night?
function getSleepHours(day) {day = day.toLowerCase();
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 5;
      break;
    case 'sunday':
      return 6;
      break;
  }
}

//total hours slept in a week
function getActualSleepHours() {
  const sum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return sum;
}

function getIdealSleepHours(idealHours) {
  return idealHours * 7;
}

console.log(getIdealSleepHours(6))

function calculateSleepDebt() {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(6);
  if (actualSleepHours === idealSleepHours) {
    return 'You have perfect amount of sleep';
  } else if (actualSleepHours > idealSleepHours) {
    const overtime = actualSleepHours - idealSleepHours;
    return `You overslept about ${overtime} hour(s)` ;
  } else {
    const undertime = idealSleepHours - actualSleepHours;
    return `Get another ${undertime} hours of sleep`;
  }
}

console.log(calculateSleepDebt())
