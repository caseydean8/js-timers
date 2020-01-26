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
let final = [];
let palindrome = false;

const reverseIt = oldString => {
  let string = oldString + " ";
  // console.log(string);
  // console.log(string.length);
  const stringRecur = string => {
    // console.log(string);
    let cut = 0;
    let newString;
    let reverseString = [];
    if (string.length > 0) {
      for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
          // console.log(string[i]);
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
      // console.log(reverseString);
      newString = string.slice(cut + 1, string.length);
      stringRecur(newString);
      final.unshift(reverseString);
    } else {
      console.log("finished");
    }
  };
  stringRecur(string);
  console.log(final.join());
  let last = final.join().replace(/,/g, "");
  display(last);
};

const display = (string) => {
  console.log(palindrome);
  if(palindrome) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = string;
  }
  document.getElementById("result").innerHTML = string;
}

const isPal = string => {
  // let noPeriod = string.replace(".", "");
  let noSpace = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()? ]/g, "")
    .toLowerCase();
  let half = noSpace.length / 2;
  // console.log(half);
  let firstHalf = [];
  let secondHalf = [];
  for (let i = 0; i < noSpace.length; i++) {
    if (i < half) {
      firstHalf.push(noSpace[i]);
    } else if (i >= half) {
      secondHalf.unshift(noSpace[i]);
    }
  }

  firstHalf.length = parseInt(half);
  // console.log(firstHalf);
  // console.log(secondHalf);
  // console.log(JSON.stringify(firstHalf));
  if (JSON.stringify(firstHalf) === JSON.stringify(secondHalf)) {
    console.log("true");
    palindrome = true;
    reverseIt(string);
  } else {
    reverseIt(string);
    console.log(false);
  }
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
