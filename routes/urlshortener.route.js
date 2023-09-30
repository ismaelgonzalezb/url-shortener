const { Router } = require("express");

const { UrlShortController } = require("../controllers");

const routeUrl = Router();

routeUrl.get("/", UrlShortController.getHomePage);
routeUrl.post("/", UrlShortController.newShortUrl);

module.exports = { routeUrl };
