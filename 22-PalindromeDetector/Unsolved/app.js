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
const reverseIt = oldString => {
  // console.log(string.length);
  let string = oldString + " ";
  console.log(string);
  console.log(string.length);
  const stringRecur = string => {
    console.log(string);
    let cut = 0;
    let newString;
    let reverseString = [];
    let fin;
    if (string.length > 0) {
      for (let i = 0; i < string.length; i++) {
        
        if (string[i] !== " ") {
          console.log(string[i]);
          reverseString.unshift(string[i]);
        }

        if (string[i] === " ") {
          reverseString.push(" ");
          cut = i;
          break;
        }
      }
      console.log(reverseString);
      newString = string.slice(cut + 1, string.length);
      stringRecur(newString);
      final.unshift(reverseString);
      // let stringer = JSON.stringify(final);
      // console.log(stringer)
      // let finalString = stringer.replace(/[.\/#!$%\^&\*;:{}=\-_`~()?"]/g, "");
      // for (let i = 0; i < finalString.length; i++) {
      //   console.log(finalString[i])
      // }
      // console.log(reverseString);
      // console.log(finalString);
    } else {
      console.log("finished");
    }
  };
  stringRecur(string);
  // for (let i = 1; i < final.length; i++) {
  //   let last = final[0].concat(final[i]);
  //   return last;
  // }
  console.log(final.join());
  let last = final.join();
  document.getElementById("result").innerHTML = last.replace(/,/g, "");
  // console.log(last);
  // reverseIt(newString);
  // console.log(cut);
  // console.log(string);
  // console.log(reverseString);
  // console.log(newString);
};

// reverseIt("This is an example");

const isPal = string => {
  let noPeriod = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()? ]/g, "")
    .toLowerCase();
  let half = noPeriod.length / 2;
  // console.log(half);
  let firstHalf = [];
  let secondHalf = [];
  for (let i = 0; i < noPeriod.length; i++) {
    if (i < half) {
      firstHalf.push(noPeriod[i]);
    } else if (i >= half) {
      secondHalf.unshift(noPeriod[i]);
    }
  }

  firstHalf.length = parseInt(half);
  console.log(firstHalf);
  console.log(secondHalf);
  console.log(JSON.stringify(firstHalf));
  if (JSON.stringify(firstHalf) === JSON.stringify(secondHalf)) {
    document.getElementById("result").innerHTML = noPeriod;
    console.log("true");
  } else {
    reverseIt(string);
  }
};

isPal("Otto needs Xanax.");
// isPal("Was it a car or a cat I saw?");
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
