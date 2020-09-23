const ProductAdvertisingAPIv1 = require('./src/index');
const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
const api = new ProductAdvertisingAPIv1.DefaultApi();
const getBrowseNodesRequest = new ProductAdvertisingAPIv1.GetBrowseNodesRequest();
const config = require('../config');

class getBrowseNodesApi {
  constructor() {
    defaultClient.accessKey = config.ACCESS_KEY;
    defaultClient.secretKey = config.SECRET_KEY;
    defaultClient.host = config.API_HOST;
    defaultClient.region = config.REGION;
    getBrowseNodesRequest['PartnerTag'] = config.PARTNER_TAG;
    getBrowseNodesRequest['PartnerType'] = config.PARTNER_TYPE;
  }

  async getBrowseNodes(requestBody) {
    Object.keys(requestBody).forEach((key) => {
      getBrowseNodesRequest[key] = requestBody[key];
    });

    return await api.getBrowseNodes(getBrowseNodesRequest);
  }
}

module.exports = getBrowseNodesApi;
