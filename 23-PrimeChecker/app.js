const primeChecker = (num) => {
  for (let i = 2; i < num-1; i++) {
    console.log(num % i)
    if (num % i === 0) {
      console.log(`${num} is not a prime number`)
      break
    } else {
      console.log(`${num} is a prime number`)
    }
  }
}

primeChecker(13)