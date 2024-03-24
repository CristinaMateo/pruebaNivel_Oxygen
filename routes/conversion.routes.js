const express = require('express');
const convController = require("../controllers/conv.controller");
const convRouter = express.Router();

convController.get("/saved", convController.getSavedConversions)
convController.post("/saved", convController.newConversion)
convController.delete("/saved/:name", convController.deleteOneConversion)

module.exports = convRouter;