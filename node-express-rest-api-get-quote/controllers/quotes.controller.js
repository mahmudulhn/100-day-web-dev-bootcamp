function getRandomQuote(req, res) {
    res.json({
        quote: 'A random quote!',
    });
}

module.exports = {
    getRandomQuote: getRandomQuote,
}