const fibonacci = num => {
  let fibArr = [0];
  let y;
  const startFib = x => {
    if (num >= 1) {
      num--;
      fibArr.push(x);
      y = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
      startFib(y);
    } else if (num < 0){
      console.log("please enter a positive integer")
    }
  };

  typeof num === "number" ? startFib(1) : console.log("not a number");
  console.log(fibArr);
};

fibonacci(12);
