const { UrlShorter } = require("../models");

class UrlShortService {
  newShortUrl = async (shorturls) => {
    const response = await UrlShorter.create({ full: shorturls });
    return response;
  };

  getShortedURL = async (id) => {
    const urlShorted = await UrlShorter.findOne({ short: id });

    if (!urlShorted) {
      const error = new Error();
      error.message = `URL not found!`;
      error.status = 404;
      throw error;
    }

    urlShorted.clicks++;
    urlShorted.save();

    return urlShorted.full;
  };
}

module.exports = {
  UrlShortService: new UrlShortService(),
};
