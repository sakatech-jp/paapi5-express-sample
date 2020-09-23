const express = require('express');
const router = express.Router();
const GetItemsApi = require('../lib/getItemsApi');
const getItemsApi = new GetItemsApi();

router.get('/', async (req, res) => {
  try {
    res.status(200).send(await getItemsApi.getItems(req.body));
  } catch (err) {
    res.send(err);
  }
});

module.exports = router
