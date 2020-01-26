// Reverse in Place w/Palindrome Detector

// Instructions
// ============

// A palindrome is a sentence that reads the same backwards and forwards:
// "Was it a car or a cat I saw?"

// Reverse each word in a sentence
// and display it on the screen in the same order.

// For example, the sentence "This is an example"
// would become `siht si na elpmaxe.`

// If the word is a palindrome, have it display in red.

const reverseIt = (oldString, boolean) => {
  let final = [];
  let string = oldString + " ";
  const stringRecur = string => {
    let cut = 0;
    let newString;
    let reverseString = [];
    if (string.length > 0) {
      for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
          reverseString.unshift(string[i]);
        }

        if (string[i] === " ") {
          reverseString.push(" ");
          cut = i;
          break;
        }

        if (string[i] === "." || string[i] === "?" || string[i] === "!") {
          reverseString.splice(string[i], 1);
          reverseString.push(string[i]);
        }
      }

      newString = string.slice(cut + 1, string.length);
      stringRecur(newString);
      final.unshift(reverseString);
    } 
  };
  stringRecur(string);
  let last = final.join().replace(/,/g, "");
  display(last, boolean);
};

const display = (string, boolean) => {
  if (boolean) {
    document.getElementById("result").style.color = "red";
  }
  document.getElementById("result").innerHTML = string;
};

const isPal = string => {
  let noSpace = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()? ]/g, "")
    .toLowerCase();
  let half = noSpace.length / 2;
  let firstHalf = [];
  let secondHalf = [];
  let palindrome = false;

  for (let i = 0; i < noSpace.length; i++) {
    i < half ? firstHalf.push(noSpace[i]) : secondHalf.unshift(noSpace[i]);
  }

  firstHalf.length = parseInt(half);

  if (JSON.stringify(firstHalf) === JSON.stringify(secondHalf)) {
    palindrome = true;
  }
  reverseIt(string, palindrome);
};

// isPal("Otto needs Xanax.");
isPal("Was it a car or a cat I saw?");
// isPal("This is an example.")

// Notes:
// ======

// Remove periods.
// Add the result to the page in the div with the id "Result".
// Here are some test phrases to put in your JavaScript:
// "Otto bought a racecar he cannot afford."
// "Otto lost the deed to his house."
// "Otto needs Xanax."

// Bonus:
// ======

// Remove all "special characters" (commas, periods, etc).
// Do not use the reverse() method.
