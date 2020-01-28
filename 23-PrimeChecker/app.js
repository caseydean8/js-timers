const primeChecker = (num) => {
  let isPrime = true;
  let divisors = [];

  for (let i = 2; i < num-1; i++) {
    if (num % i === 0) {
      isPrime = false
      divisors.push(i);
    }
  }
  isPrime ? console.log(`${num} is a prime number`) : console.log(`${num} is divisible by ${divisors}`)
}

primeChecker(12)
primeChecker(13)
primeChecker(132)
primeChecker(1)