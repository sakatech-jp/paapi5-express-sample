const express = require('express');
const router = express.Router();
const SearchItemsApi = require('../lib/searchItemsApi');
const searchItemsApi = new SearchItemsApi();

router.get('/', async (req, res) => {
  try {
    res.status(200).send(await searchItemsApi.searchItems(req.body));
  } catch (err) {
    res.send(err);
  }
});

module.exports = router
