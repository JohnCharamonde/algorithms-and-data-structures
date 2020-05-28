// Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

//   const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);
// // Returns 6 (buying for $5 and selling for $11)

// JavaScript
// No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

function maxProfit(stockPrices) {
  if(stockPrices.length < 2) return 'There must be at least two prices to measure a profit...'

  let profit = stockPrices[1] - stockPrices[0];
  let buy = stockPrices[0];

  for(let i = 0; i < stockPrices.length - 1; i++) {
    buy = Math.min(buy, stockPrices[i]);
    profit = Math.max(profit, stockPrices[i + 1] - buy)
  }

  return profit;
}

const stockPrices = [10, 7, 5, 8, 11, 9, 12, 9, 13];

// function only allows for 1 buy and 1 sell action per day...
const moreStockPrices = [8, 9, 7, 9, 10, 11, 9, 11, 12, 8, 5, 7, 8, 7, 6, 8, 10, 11, 10, 9, 10, 13];

const noTrades = [6];

const twoTrades = [6, 8];

const negativeProfit = [9, 5, 3, 2];

const noProfit = [5, 5, 4, 3, 2, 1];

maxProfit(noProfit)