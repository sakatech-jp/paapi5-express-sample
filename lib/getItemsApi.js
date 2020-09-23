const ProductAdvertisingAPIv1 = require('./src/index');
const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
const api = new ProductAdvertisingAPIv1.DefaultApi();
const getItemsRequest = new ProductAdvertisingAPIv1.GetItemsRequest();
const config = require('../config');

class getItemsApi {
  constructor() {
    defaultClient.accessKey = config.ACCESS_KEY;
    defaultClient.secretKey = config.SECRET_KEY;
    defaultClient.host = config.API_HOST;
    defaultClient.region = config.REGION;
    getItemsRequest['PartnerTag'] = config.PARTNER_TAG;
    getItemsRequest['PartnerType'] = config.PARTNER_TYPE;
  }

  async getItems(requestBody) {
    Object.keys(requestBody).forEach((key) => {
      getItemsRequest[key] = requestBody[key];
    });

    return await api.getItems(getItemsRequest);
  }
}

module.exports = getItemsApi;
