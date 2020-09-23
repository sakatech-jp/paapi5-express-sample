const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const searchItems = require('./routes/searchItems');
const getItems = require('./routes/getItems');
const getVariations = require('./routes/getVariations');
const getBrowseNodes = require('./routes/getBrowseNodes');

const server = app.listen(3000, () => {
  console.log(`Listening to PORT: ${server.address().port}`);
});

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/searchItems', searchItems);
app.use('/getItems', getItems);
app.use('/getVariations', getVariations);
app.use('/getBrowseNodes', getBrowseNodes);
