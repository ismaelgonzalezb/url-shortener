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

  getShortedURL = async (req, res) => {
    const { id } = req.params;
    const response = await UrlShortService.getShortedURL(id);

    res.redirect(response);
  };
}

module.exports = {
  UrlShortController: new UrlShortController(),
};
