const { UrlShorter } = require("../models");

class UrlShortService {
  newShortUrl = async (shorturls) => {
    const response = await UrlShorter.create({ full: shorturls });

    return response;
  };
}

module.exports = {
  UrlShortService: new UrlShortService(),
};
