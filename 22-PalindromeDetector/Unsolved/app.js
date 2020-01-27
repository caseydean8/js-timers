const palCheck = string => {
  let reverseArr = [];
  stringArr = string.split(' ');
  console.log(stringArr);
  for (let i = 0; i < stringArr.length; i++) {
    console.log(stringArr[i]);
    for (let j = stringArr[i].length - 1; j >= 0; j--) {
      // console.log(stringArr[i]);
      reverseArr.push(stringArr[i][j]);
    }
  }
  console.log(reverseArr);
}

palCheck("Your Mom");