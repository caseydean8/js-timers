const palCheck = string => {
  let reverseArr = [];
  stringArr = string.split(" ");
  console.log(stringArr);
  for (let i = 0; i < stringArr.length; i++) {
    stringArr[i] = " " + stringArr[i];
    console.log(stringArr[i]);
    for (let j = stringArr[i].length - 1; j >= 0; j--) {
      // console.log(stringArr[i]);
      reverseArr.push(stringArr[i][j]);
    }
    // console.log(stringArr[i]);
    stringArr[i] = stringArr[i].trim();
  }

  reverseArr = reverseArr.join("").trim();
  reverseArr = reverseArr.split(" ");
  let palSpan = document.createElement("span");
  palSpan.style.color = "red";
  console.log(palSpan);

  for (let i = 0; i < reverseArr.length; i++) {
    // console.log(reverseArr[i]);
    // console.log(stringArr[i]);
    if (reverseArr[i].toLowerCase() === stringArr[i].toLowerCase()) {
      console.log(reverseArr[i]);
      // span = document.createElement(`<span style="color: red;">${reverseArr[i]}</span>`);
      palSpan.textContent = reverseArr[i];
      reverseArr[i] = palSpan.outerHTML;
      console.log(reverseArr[i]);
    }
  }
  // reverseArr = reverseArr[0].split('');
  console.log(reverseArr);
  // console.log(rString);
  document.getElementById("result").innerHTML = reverseArr;
};

palCheck("Your Mom");
