const stringCalc = string => {
  let calcArr = string.split(" ");
  let operator = calcArr[0].toLowerCase();
  let num1 = parseInt(calcArr[1]);
  let num2 = parseInt(calcArr[3]);
  let answer;

  const calculate = () => {
    switch (operator) {
      case "add":
        answer = num1 + num2;
        break;
      case "subtract":
        answer = num2 - num1;
        break;
      case "divide":
        answer = num1 / num2;
        break;
      case "multiply":
        answer = num1 * num2;
        break;
      default:
        console.log(
          "Please enter Add, Subtract, Divide, or Multiply as your first word"
        );
    }
  };
  num1 && num2
    ? calculate()
    : console.log(
        "please enter valid numbers and check your sentence structure"
      );
  return answer;
};

// console.log(stringCalc(`Add 2 and 4`));
// stringCalc(`Subtract 3 from 5`);
// stringCalc(`Divide 6 by 2`);
// stringCalc(`Multiply 3 by 7`);
console.log(stringCalc("Add 7 7"));
