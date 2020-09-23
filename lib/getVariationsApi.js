const ProductAdvertisingAPIv1 = require('./src/index');
const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
const api = new ProductAdvertisingAPIv1.DefaultApi();
const getVariationsRequest = new ProductAdvertisingAPIv1.GetVariationsRequest();
const config = require('../config');

class getVariationsApi {
  constructor() {
    defaultClient.accessKey = config.ACCESS_KEY;
    defaultClient.secretKey = config.SECRET_KEY;
    defaultClient.host = config.API_HOST;
    defaultClient.region = config.REGION;
    getVariationsRequest['PartnerTag'] = config.PARTNER_TAG;
    getVariationsRequest['PartnerType'] = config.PARTNER_TYPE;
  }

  async getVariations(requestBody) {
    Object.keys(requestBody).forEach((key) => {
      getVariationsRequest[key] = requestBody[key];
    });

    return await api.getVariations(getVariationsRequest);
  }
}

module.exports = getVariationsApi;
