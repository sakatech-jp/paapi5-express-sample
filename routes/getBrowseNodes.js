const express = require('express');
const router = express.Router();
const GetBrowseNodesApi = require('../lib/getBrowseNodesApi');
const getBrowseNodesApi = new GetBrowseNodesApi();

router.get('/', async (req, res) => {
  try {
    res.status(200).send(await getBrowseNodesApi.getBrowseNodes(req.body));
  } catch (err) {
    res.send(err);
  }
});

module.exports = router
