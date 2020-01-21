const pangram = (string) => {
  compArr = [",", ".", ":", ";", "'", '"', "!", "?", "-", " "];
  console.log(compArr.length);
  const punctuations = compArr.length;
  for (let i = 0; i < string.length; i++) {
    if (!compArr.includes(string[i])) {
      compArr.push(string[i].toLowerCase());
    }
  }
  console.log(compArr)
  console.log(compArr.length);
  compArr.length >= punctuations + 26 ? console.log("Is Pangram") : console.log("Is not a Pangram");
}

console.log("pangram")
pangram(`The quick brown fox jumps over the lazy dog.`);
pangram("Take therefore no thoughts for the morrow, for the morrow shall take thoughts for the things of itself. Sufficient to the day are the evils thereof.")