// Buy Low, Sell High -- Starter Code

// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.2, 1.34, 1.74, 1.18, 1.9, 1.1];
console.log(stockPrices);
// Your Biggest Profit function
var biggestProfit = function(arr, sharesBought) {
  let largest = arr[0];
  let smallest = arr[0];
  let largestIndex = 0;
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      largestIndex = i;
      console.log(largestIndex);
    }
    if (arr[i] < smallest && i < largestIndex) {
      console.log(largestIndex);
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  // arr.length = arr.indexOf(largest) + 1;
  // console.log(arr);
  // console.log(largest)
  // for (let j = 0; j < arr.length; j++) {
  //   if (arr[j] < arr[j + 1]) {
  //     smallest = arr[j];
  //   }
  // }

  // console.log(arr.length);
  console.log(largest);
  console.log(smallest);
  console.log(`smallest index = ${smallestIndex}`);
  console.log(`largest index = ${largestIndex}`);
  // console.log(arr.indexOf(arr[i]));
  // console.log(arr.indexOf(largest));
  // console.log(arr.indexOf(largest));
  // console.log(arr.indexOf(smallest));
};

// A Call to your Biggest Profit function.
biggestProfit(stockPrices, 10000);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.

// Write an efficient function that takes an array of stock prices (assuming they are in chronological order) and the shares purchased. The function would determine the biggest profit possible during that period if someone bought the stock at the lowest price and sold it at the highest.

// You must buy before you sell. No shorting.

// By efficient, you should loop over the array only once!

// ## Bonuses

// 1. Put in validation so that there are at least 3 stock prices in the array
// 2. Consider case when the stock goes down every moment
// 3. You would want to return the minimum negative profit.
// 4. For example, if you bought at $22 and sold at $21, you would lose $1 per share. That's the best case scenario if you had to buy and sell this stock within an hour.
// 5. Example:
//    ```javascript
//    [135, 34, 25, 22, 21, 4, 1];
//    ```
