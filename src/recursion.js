/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

// var altFactorial = function(n) {
//   if (n < 0) {
//     return null;
//   } else if (n <= 1) {
//     return 1;
//   } else {
//     return n * altFactorial(n - 1);
//   }
// };


var factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length <= 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + sum(array.slice(1));
  }
};


// var sum = function(array) {
//   //set a variable equal to a .shift of array
//   var n = array[0];
//   //if that variable is undefined
//   if (n === undefined) {
//     //return 0
//     return 0;
//   } else {
//     //otherwise
//     //return that variable + function(array)
//     return n + sum(array.slice(1));
//   }
// };

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
//it's breaking every time it reaches the first nested array with two or more non-array items
var arraySum = function(array) {
  //if array[0] is an integer
  if (typeof array[0] === "number") {
    //return array[0] + arraySum(array.slice(1))
    return array[0] + arraySum(array.slice(1));
  } else if (Array.isArray(array[0])) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  } else if (array[0] === undefined) {
    return 0;
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  } else if (Math.abs(n) > 1) {
    return isEven(Math.abs(n) - 2);
  } else if (Math.abs(n) === 1){
    return false 
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //doesn't work with negative numbers right now. something has to fundamentally change
  if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  } else if (n === 0) {
    return 0;
  } else {
    return n - 1 + sumBelow(n - 1);
  }
};


//current problem: the last item isn't getting added to this array
// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

//serious whack a mole. Why am I oscillating between "expected undefined to be an array" and "cannot read property '0' of undefined"
var range = function(x, y) {
  if (Math.abs(x - y) <= 1) {
    return [];
  } else if (x - y === -2) {
    return [x + 1];
  } else if (x - y === 2) {
    return [x - 1];
  } else if (x < y) {
    x++;
  } else {
    x--;
  }
  var result = [x];
  range(x, y).forEach(function(item) { result.push(item) })
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    return (10 / base * exponent(base, exp + 1)) / 10;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n > 2 && n % 2 === 1) {
    return false;
  }
  if (n < 1) {
    return false;
  } else if (n <= 2) {
    return true;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  }
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var processedInput = string.toLowerCase().replace(' ', '');
  if (processedInput.length <= 1) {
    return true;
  } else {
    if (processedInput[0] !== processedInput[processedInput.length - 1]) {
      return false;
    } else {
      return palindrome(processedInput.slice(1, processedInput.length - 1));
    }
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var absVal = function(n) {
  if (n < 0) {
    return -n;
  } else {
    return n;
  }
}

var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (absVal(x) < absVal(y)) {
    return x;
  } else {
    if (x < 0 && y > 0) {
      return modulo(x + y, y);
    } else {
      return modulo(x - y, y);
    }
  }
};

  //if y is < 0
    //return multiply(-x, -y)
    //otherwise
    //if y is 1
      //return x
      //otherwise
      //return multiply(x + x, y - 1)

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y < 0) {
    return multiply(-x, -y);
  } else {
    if (y === 1) {
      return x;
    } else {
      return x + multiply(x, y - 1);
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (x === 0) {
    if (y === 0) {
      return NaN;
    } else {
      return 0;
    }
  } else if (y < 0) {
    return divide(-x, -y);
  } else if (y === 1) {
    return x;
  } else if (x < y) {
    return 0;
  } else if (x < y + y) {
    return 1;
  } else {
    return 1 + divide(x - y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  } else if (x === y) {
    return x;
  } else if (y > x) {
    return gcd(y, x);
  } else {
    var currentRemainder = modulo(x, y);
    if (currentRemainder === 0) {
      return y;
    } else {
      return gcd(y, currentRemainder);
    }
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] === undefined || str2[0] === undefined) {
    if (str1[0] === undefined && str2[0] === undefined) {
      return true;
    } else {
      return false;
    }
  } else {
    if (str1[0] !== str2[0]) {
      return false;
    } else {
      return compareStr(str1.slice(1), str2.slice(1));
    }
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length < 1) {
    return [];
  } else if (str.length === 1) {
    return [str];
  } else {
    var result = [str[0]];
    createArray(str.slice(1)).forEach(function(item) { result.push(item )});
    return result;
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return [array[0]];
  } else {
    var result = [array[array.length - 1]];
    reverseArr(array.slice(0, array.length - 1)).forEach(function(item) { result.push(item); });
    return result;
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [value];
  } else {
    var result = [value];
    buildList(value, length - 1).forEach(function(item) { result.push(item); });
    return result;
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

var fizzBuzz = function(n) {
  if (n === 1) {
    return [n.toString()];
  } else {
    var result = [];
    fizzBuzz(n - 1).forEach(function(item) { result.push(item); } );
    if (n % 3 === 0 && n % 5 === 0) {
      result.push("FizzBuzz");
    } else if (n % 3 === 0) {
      result.push("Fizz");
    } else if (n % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(n.toString());
    }
    return result;
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  } else if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    return countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 1) {
    return [callback(array[0])];
  } else {
    var result = [callback(array[0])];
    rMap(array.slice(1), callback).forEach(function(item) { result.push(item); });
    return result;
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2

var countKeysInObj = function(obj, key) {
  var result = 0;
  var currentKeys = Object.keys(obj);
  currentKeys.forEach(function(item) {
    if (item === key) {
      result++;
    }
    if (typeof obj[item] !== 'string') {
      result += countKeysInObj(obj[item], key);
    }
  })
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if (typeof obj === "string"){
    if (obj === value) {
      return 1;
    } else {
      return 0;
    }
  } else {
    var result = 0;
    var objValues = Object.values(obj);
    objValues.forEach(function(item) { 
      if (item === value) {
        result++;
      } else if (typeof item !== "string") {
        result += countValuesInObj(item, value);
      }
    });
    return result;
  }
};

//input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};


// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  var currentProps = Object.entries(obj);
  currentProps.forEach(function(item) {
    var generatedKey;
    var generatedValue;
    if (item[0] === oldKey) {
      delete obj[oldKey];
      generatedKey = newKey;
    } else {
      generatedKey = item[0];
    }
    if (typeof item[1] === 'string') {
      generatedValue = item[1];
    } else {
      generatedValue = replaceKeysInObj(item[1], oldKey, newKey);
    }
    obj[generatedKey] = generatedValue;
  });
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0, 1];
  }
  var result = [];
  fibonacci(n - 1).forEach(function(item) { result.push(item) });
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(array[0].toUpperCase());
    capitalizeWords(array.slice(1)).forEach(function(item) {
      result.push(item);
    });
  }
  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    var newWord = array[0][0].toUpperCase() + array[0].slice(1);
    result.push(newWord);
    capitalizeFirst(array.slice(1)).forEach(function(item) {
      result.push(item);
    });
  }
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var result = 0;
  Object.values(obj).forEach(function(item) {
    if (typeof item === "object") {
      result += nestedEvenSum(item);
    } else if (typeof item === "number" && item % 2 === 0) {
      result += item;
    }
  });
  return result;  
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (!Array.isArray(array)) {
    return array;
  } else {
    var result = [];
    array.forEach(function(item) {
      if (Array.isArray(item)) {
        flatten(item).forEach(function(subItem) {
          result.push(subItem);
        });
      } else {
        result.push(item);
      }
    });
  }
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    obj = {};
  }
  var isLastLetter = false;
  if (str.length === 0) {
    return obj;
  } else if (str.length === 1) {
    isLastLetter = true;
  }
  if (Object.keys(obj).includes(str[0])) {
    obj[str[0]]++;
  } else {
    obj[str[0]] = 1;
  }
  if (!isLastLetter) {
    letterTally(str.slice(1), obj);
  }
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var result = [];
  if (list.length === 0) {
    return result;
  } else {
    if (list[0] !== list[1]) {
      result.push(list[0]);
    }
    compress(list.slice(1)).forEach(function(item) {
      result.push(item);
    });
  }
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    var subResult = array[0];
    subResult.push(aug);
    result.push(subResult);
    augmentElements(array.slice(1), aug).forEach(function(item) {
      result.push(item);
    })
  }
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    if ((array[0] === 0 && array[1] !== 0) || array[0] !== 0) {
      result.push(array[0]);
    }
    minimizeZeroes(array.slice(1)).forEach(function(item) {
      result.push(item);
    });
  }
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(Math.abs(array[0]));
    alternateSign(array.slice(1)).forEach(function(item) {
      result.push(item * -1);
    });
  }
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var wordKey = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  if (str.length === 0) {
    return '';
  } else {
    if (Object.keys(wordKey).includes(str[0])) {
      return wordKey[str[0]] + numToText(str.slice(1));
    } else {
      return str[0] + numToText(str.slice(1));
    }
  }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = $('document')) {
  var result = 0;
  if (node.tagName === tag) {
    result++;
  }
  if (node.children.length === 0) {
    return result;
  } else {
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i] !== undefined) {
        result += tagCount(tag, node.children[i]);
      }
    }
  }
  return result;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

var binarySearch = function(array, target, min = 0, max = array.length - 1) {
  var currIndex = Math.floor((max - min) / 2) + min;
  var currItem = array[currIndex];
  if (currItem === target) {
    return currIndex;
  } else if (min >= max) {
    return null;
  } else if (currItem < target) {
    return binarySearch(array, target, currIndex + 1, max);
  } else if (currItem > target) {
    return binarySearch(array, target, min, currIndex - 1);
  }
};

// var mergeSort = function(array) {
//   if (array.length === 0) {
//     return [];
//   } else if (array.length === 1) {
//     return array[0];
//   } else {
//     var sortedArray = [];
//     var midpoint = Math.floor(array.length / 2);
//     for (let i = midpoint; i >= 0; i--) {
//       var oppositeIndex = array.length - i;
//       if (array.length === 2) {
//         if (array[0] > array[1]) {
//           sortedArray.unshift(array[1]);
//           sortedArray.push(array[0]);
//         } else {
//           sortedArray.unshift(array[0]);
//           sortedArray.push(array[1]);
//         }
//       } else if (array[i] > array[oppositeIndex]) {
//         sortedArray.unshift(array[oppositeIndex]);
//         sortedArray.push(array[i]);
//       } else {
//         sortedArray.unshift(array[i]);
//         sortedArray.push(array[oppositeIndex]);
//       }
//     }
//     var result = [];
//     mergeSort(sortedArray.slice(0, midpoint + 1)).forEach(function(item) {
//       result.push(item);
//     });
//     mergeSort(sortedArray.slice(midpoint + 1)).forEach(function(item) {
//       result.push(item);
//     });
//   }
//   return result;
// };

// 39. Write a merge sort function. UNDEFINED IS SHOWING UP IN THE ARRAYS I'M MAKING
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {
    var result = [];
    for (let i = 0; i < input.length; i++) {
      if (typeof input[i] === 'object') {
        result.push(clone(input[i]));
      } else {
        result.push(input[i]);
      }
    }
  } else {
    var result = {};
    var keys = Object.keys(input);
    var values = Object.values(input);
    for (let i = 0; i < keys.length; i++) {
      if (typeof values[i] === 'object') {
        result[keys[i]] = clone(values[i]);
      } else {
        result[keys[i]] = values[i];
      }
    }
  }
  return result;
};
