const max = function (a, b) {
  return a > b ? a : b;
};
console.log("max value max(a,b) is: ", max(20, 10));

const maxOfThree = (a, b, c) => (a > b && a > c ? a : b > a && b > c ? b : c);

console.log("max value amont three paramater is ", maxOfThree(5, 1, 2));

const vowel = function (ch) {
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    return true;
  } else {
    return false;
  }
};
console.log(`Test char 'a' is volwe `, vowel("a"));

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log("sum of array [1,2,3,4] is ", sum([1, 2, 3, 4]));

function mul(mullArr) {
  let mul = 1;
  for (let j = 0; j < mullArr.length; j++) {
    mul *= mullArr[j];
  }
  return mul;
}

console.log("Multiply of array [1,2,3,4] is ", mul([1, 2, 3, 4]));

function reverse(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}

console.log(`Rever of String 'jag testar' is `, reverse("jag testar"));

const words = ["Hello", "iamhello", "iamlongestWord", "shortestword", "shor"];
const longestWord = (words, i) => words.filter((word) => word.length > i);
console.log(
  "length of the Words that is greater than given number ",
  longestWord(words, 9)
);

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem * 10;
});
document.writeln(b.toString() + "<br/>");
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue * elem;
});
document.writeln(d + "<br/>");

const d2 = a.find(function (elem) {
  return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
  return elem > 1;
}); //1
document.writeln(d2 + "<br/>");
document.writeln(d3);

console.log("-------------Testing Code------------");
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionArrayTest(expected, found) {
  let is_same =
    expected.length == found.length &&
    expected.every(function (element, index) {
      return element === found[index];
    });
  if (is_same) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

/* max3 takes 3 numbers as arguments and returns the largest */
// function maxOfThree(a, b, c) {
//   return max(max(a, b), c);
// }

console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(4, maxOfThree(55, 4, 44))
);

console.log(
  "Expected output of vowel('e') is true  " + myFunctionTest(true, vowel("e"))
);

console.log(
  "Expected output of Sum of array [1,2,3,4] is 10  " +
    myFunctionTest(10, sum([1, 2, 3, 4]))
);
console.log(
  "Expected output of Multiply of array [1,2,3,4] is 24  " +
    myFunctionTest(24, mul([1, 2, 3, 4]))
);

console.log(
  `Expected output of Reverse string 'hello' is 'olloh' ` +
    myFunctionTest("olleh", reverse("hello"))
);

console.log(
  "Expected output of Array ['cat','apple','honey','strenght'] whose lenght is greater than 5  " +
    myFunctionArrayTest(
      ["strenght"],
      longestWord(["cat", "apple", "honey", "strenght"], 5)
    )
);
