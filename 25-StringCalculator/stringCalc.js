const stringCalc = string => {
  calcArr = string.split(" ");
  console.log(calcArr);
  let operator = calcArr[0].toLowerCase();
  let num1 = parseInt(calcArr[1]);
  let num2 = parseInt(calcArr[3]);
  switch (operator) {
    case "add":
      operator = num1 + num2;
      break;
    case "subtract":
      operator = num2 - num1;
      break;
    case "divide":
      operator = num1 / num2;
      break;
    case "multiply":
      operator = num1 * num2;
      break;
  }
  console.log(operator);
};

stringCalc(`Add 2 and 4`);
stringCalc(`Subtract 3 from 5`);
stringCalc(`Divide 6 by 2`);
stringCalc(`Multiply 3 by 7`);
