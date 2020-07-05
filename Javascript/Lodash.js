const _ ={
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue
  },

  inRange(number, start, end){
     if (end === undefined){
      const temp = start
      end = temp;
      start = 0;
    } if (start > end){
      const temp = end;
      end = start;
      start = temp;
    } isInRange = ((start <= number) && (number < end));
    return isInRange
  },

  words(str){
    array = str.split(" ");
    return array
  },

  pad(str, length){
    if (str.length >= length){
      return str;
    } else if (str.length < length){
      padDiff = Math.floor((length - str.length) / 2);
      padder = " ".repeat(padDiff);
      if (padDiff % 2 === 0){
        paddedStr = padder + str + padder;
      } else{
        paddedStr = padder + str + padder + " ";
      } return paddedStr;
    }
  },

  has(object, key){
    const hasValue = (object[key] != undefined);
    return hasValue;
  },

  invert(object){
    let invertedObject = {};
    for (let prop in object){
      const originalValue = object[prop];
      invertedObject = {originalValue : prop};
    } return invertedObject;
  },

  findKey(object, predicate){
    for (let prop in object){
      const value = object[prop];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return prop;
      } 
      } return undefined;
    },

    drop(arr, number){
      if (number === undefined){
        return arr.slice(1);
      } else if (number === 0){
        return arr;
      } else if (number >= arr.length){
        return [];
      } else {
        const numberer = number--;
        return arr.slice((numberer));
      }
    },

    dropWhile(arr, predicate){
      const cb = (element, index) =>{
        return !predicate(element, index, arr);
      } 
      const dropNumber = arr.findIndex(cb);
      const droppedNumber = this.drop(arr, dropNumber);
      //or const droppedNumber = _.drop(arr(dropNumber));
      return droppedNumber;
    },

    chunk(arr, size = 1){
      let array = [];
        for (let i = 0; i < arr.length; i += size){
          array.push(arr.slice(i, i+size))
        } return array;
      } 
    }
// Do not write or modify code below this line.
module.exports = _;
