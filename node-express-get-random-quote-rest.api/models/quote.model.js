const db = require('../data/database');

class Quote {
  static async getRandomQuote() {
    const quotes = await db.getDb().collection('quotes').find().toArray();
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomQuoteIndex];
    console.log(quotes);

    return randomQuote.text;
  }
}

module.exports = Quote;