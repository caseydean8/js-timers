const palCheck = string => {
  let reverseArr = [];
  let stringArr = string.split(" ");
  let punct;
  let palSpan = document.createElement("span");
  palSpan.style.color = "red";

  for (let i = 0; i < stringArr.length; i++) {
    stringArr[i] = " " + stringArr[i];
    console.log(stringArr[i]);
    for (let j = stringArr[i].length - 1; j >= 0; j--) {
      if (
        stringArr[i][j] === "." ||
        stringArr[i][j] === "?" ||
        stringArr[i][j] === "!"
      ) {
        console.log(stringArr[i]);
        punct = stringArr[i].slice(stringArr[i].length - 1);
        const regex = `${punct}`;
        stringArr[i] = stringArr[i].replace(regex, "");
      }
      reverseArr.push(stringArr[i][j]);
    }
    stringArr[i] = stringArr[i].trim();
  }

  reverseArr = reverseArr.join("").trim();
  reverseArr = reverseArr.split(" ");

  for (let i = 0; i < reverseArr.length; i++) {
    if (reverseArr[i].length > 1) {
      if (reverseArr[i].toLowerCase() === stringArr[i].toLowerCase()) {
        palSpan.textContent = reverseArr[i];
        reverseArr[i] = palSpan.outerHTML;
      }
    }
  }

  document.getElementById("result").innerHTML = punct
    ? reverseArr.join(" ").concat("", punct)
    : reverseArr.join(" ");
};

palCheck("Your Mom");
// palCheck("Otto needs Xanax.");
// palCheck("Was it a car or a cat I saw?");
