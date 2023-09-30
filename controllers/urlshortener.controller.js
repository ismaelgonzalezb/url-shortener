const { UrlShortService } = require("../services");
const { UrlShorter } = require("../models");

class UrlShortController {
  getHomePage = async (req, res) => {
    const shorturls = await UrlShorter.find();
    res.render("index", { shorturls: shorturls });
  };

  newShortUrl = async (req, res) => {
    await UrlShortService.newShortUrl(req.body.fullUrl);
    res.redirect("/");
  };
}

module.exports = {
  UrlShortController: new UrlShortController(),
};
