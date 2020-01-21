const pangram = (string) => {
  compArr = [",", ".", ":", ";", "'", '"', "!", "?", "-", " "];
  const punctuations = compArr.length;
  for (let i = 0; i < string.length; i++) {
    if (!compArr.includes(string[i])) {
      compArr.push(string[i].toLowerCase());
    }
  }
  compArr.length >= punctuations + 26 ? console.log("Is Pangram") : console.log("Is not a Pangram");
}

pangram(`The quick brown fox jumps over the lazy dog.`);
pangram("Take therefore no thoughts for the morrow, for the morrow shall take thoughts for the things of itself. Sufficient to the day are the evils thereof.")