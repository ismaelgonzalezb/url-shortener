const { Router } = require("express");

const { UrlShortController } = require("../controllers");

const routeUrl = Router();

routeUrl.get("/", UrlShortController.getHomePage);

module.exports = { routeUrl };
