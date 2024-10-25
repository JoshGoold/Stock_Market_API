const earnings = require('../routes/stock/stock_earnings')
const global_quotes = require('../routes/stock/stock_global_quote')
const overview = require('../routes/stock/stock_overview')
const sentiment = require('../routes/stock/stock_sentiment')
const winners_losers = require('../routes/stock/win_lose_stock_data')


const funcs = [sentiment, earnings, global_quotes, overview, winners_losers]

async function compose(SYMBOL){
  for(const fn of funcs){
    await fn(SYMBOL)
  }
}

module.exports = compose

