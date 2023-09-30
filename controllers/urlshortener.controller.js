class UrlShortController {
  getHomePage = async (req, res) => {
    res.render("index");
  };
}

module.exports = {
  UrlShortController: new UrlShortController(),
};
