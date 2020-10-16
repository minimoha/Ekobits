// Difference
function difference (num1, num2) {
  return num1 - num2;
}

// Product
function product (num1, num2) {
  return num1 * num2;
}

// Print Day
function printDay (num) {
  let day = "";
  switch (num) {
      case 1:
          day = "Sunday";
          break;
      case 2:
          day = "Monday";
          break;
      case 3:
          day = "Tuesday";
          break;
      case 4:
          day = "Wednesday";
          break;
      case 5:
          day = "Thursday";
          break;
      case 6:
          day = "Friday";
          break;
      case 7:
          day = "Saturday";
          break;
      default:
          day = undefined;
          break;
  }

  return day;
}

// Last Element
function lastElement(arr) {
  if(arr.length > 0) {
      return arr[arr.length-1];
  }
  return undefined;
}


// Number Compare
function numberCompare(num1, num2) {
  if (num1 > num2) {
      return  "First is greater"
  } else if (num2 > num1) {
      return "Second is greater"
  } else {
      return "Numbers are equal"
  }
}

// Single Letter Count

function singleLetterCount(word, letter) {
  let count = 0;
  for (let character of word) {
      if (character.toLowerCase() === letter.toLowerCase()) {
          count++;
      }
  }
  return count;
}

// Multiple Letter Count
function multipleLetterCount(str) {
  let returnObj = {}
  for (let each of str) {
      if (each in returnObj) {
          returnObj[each]++
      } else {
          returnObj[each] = 1
      }
  }
  return returnObj;
}

// Array Manipulation

function arrayManipulation(arr, command, location, value) {
  let result = arr.slice();
  switch (command) {
      case "remove":
          switch (location) {
              case "end":
                  return arr.pop()
                  break;
               case "beginning":
                  return arr.shift()
                  break;
          }
       break;
       case "add":
          switch (location) {
              case "end":
                  result.push(value)
                  break;
               case "beginning":
                  result.unshift(value)
                  break;
          }
          break;
  }
  return result
}

// Palindrome

function isPalindrome(ar) {
  let arr = ar.split('')
  let newArr = arr.slice()
  let revArr = arr.reverse()

  for (let i = 0; i < newArr.length; i++) {
       if (newArr[i] !== revArr[i]) {
           return false;
       }
  } 
  return true;
}