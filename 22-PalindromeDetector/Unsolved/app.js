const palCheck = string => {
  let reverseArr = [];
  stringArr = string.split(" ");
  console.log(stringArr);
  let punct;
  for (let i = 0; i < stringArr.length; i++) {
    stringArr[i] = " " + stringArr[i];
    console.log(stringArr[i]);
    for (let j = stringArr[i].length - 1; j >= 0; j--) {
      // console.log(stringArr[i][j]);
      if (
        stringArr[i][j] === "." ||
        stringArr[i][j] === "?" ||
        stringArr[i][j] === "!"
      ) {
        console.log(stringArr[i]);
        // console.log(stringArr[i].length);
        punct = stringArr[i].slice(stringArr[i].length -1);
        console.log(punct);
        regex = `/${punct}/g`;
        console.log(regex);
        stringArr[i] = stringArr[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()? ]/g, "");
        console.log(stringArr[i]);
        // console.log(noper);
      }
      reverseArr.push(stringArr[i][j]);
    }
    // console.log(stringArr[i]);
    stringArr[i] = stringArr[i].trim();
  }
  console.log(reverseArr);
  reverseArr = reverseArr.join("").trim();
  reverseArr = reverseArr.split(" ");
  let palSpan = document.createElement("span");
  palSpan.style.color = "red";
  // console.log(palSpan);

  for (let i = 0; i < reverseArr.length; i++) {
    if (reverseArr[i].length > 1) {
      if (reverseArr[i].toLowerCase() === stringArr[i].toLowerCase()) {
        // console.log(reverseArr[i]);
        // span = document.createElement(`<span style="color: red;">${reverseArr[i]}</span>`);
        palSpan.textContent = reverseArr[i];
        reverseArr[i] = palSpan.outerHTML;
        // console.log(reverseArr[i]);
      }
    }
  }
  // reverseArr = reverseArr[0].split('');
  // console.log(reverseArr);
  // console.log(rString);
  // reverseArr.push(punct);
  console.log(reverseArr);
  document.getElementById("result").innerHTML = reverseArr.join(" ").concat('', punct);
};

palCheck("Your Mom");
// palCheck("Otto needs Xanax.");
// palCheck("Was it a car or a cat I saw?");
