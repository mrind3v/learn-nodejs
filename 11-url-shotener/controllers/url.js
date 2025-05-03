const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleCreateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "url is required" });
  const shortId = nanoid(8);

  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.status(200).json({ id: shortId });
}

async function handleClicks(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  res.status(200).json({totalClicks: result.visitHistory.length})
}

module.exports = {
  handleCreateShortUrl,
  handleClicks,
};
