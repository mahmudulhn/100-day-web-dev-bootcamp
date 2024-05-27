const express = require('express');

const quoteRoutes = require('./routes/quotes.routes');

const app = express();

app.use('/quote', quoteRoutes);

app.listen(3000);