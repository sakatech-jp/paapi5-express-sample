const ProductAdvertisingAPIv1 = require('./src/index');
const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
const api = new ProductAdvertisingAPIv1.DefaultApi();
const searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest();
const config = require('../config');

class searchItemsApi {
  constructor() {
    defaultClient.accessKey = config.ACCESS_KEY;
    defaultClient.secretKey = config.SECRET_KEY;
    defaultClient.host = config.API_HOST;
    defaultClient.region = config.REGION;
    searchItemsRequest['PartnerTag'] = config.PARTNER_TAG;
    searchItemsRequest['PartnerType'] = config.PARTNER_TYPE;
  }

  async searchItems(requestBody) {
    Object.keys(requestBody).forEach((key) => {
      searchItemsRequest[key] = requestBody[key];
    });

    return await api.searchItems(searchItemsRequest);
  }
}

module.exports = searchItemsApi;
