const express = require('express');
const router = express.Router();
const GetVariationsApi = require('../lib/getVariationsApi');
const getVariationsApi = new GetVariationsApi();

router.get('/', async (req, res) => {
  try {
    res.status(200).send(await getVariationsApi.getVariations(req.body));
  } catch (err) {
    res.send(err);
  }
});

module.exports = router
