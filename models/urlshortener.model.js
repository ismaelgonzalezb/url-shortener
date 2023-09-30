const { Schema, default: mongoose } = require("mongoose");
const shortId = require("shortid");

const UrlShortener = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const UrlShorter = mongoose.model("ShortUrl", UrlShortener);

module.exports = {
  UrlShorter,
};
