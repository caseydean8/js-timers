const fibonacci = num => {
  let fibArr = [0];

  const startFib = x => {
    if (num > 1) {
      num--;
      fibArr.push(x);
      let y = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
      startFib(y);
    } else {
      console.log("finished");
    }
  };

  typeof num === "number" ? startFib(1) : console.log("not a number");
  console.log(fibArr);
};

fibonacci(11);
