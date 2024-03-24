const express = require('express');
const convController = require("../controllers/conv.controller");
const convRouter = express.Router();

convRouter.get("/saved", convController.savedConversions)
convRouter.post("/saved", convController.newConversion)
convRouter.delete("/saved/:id", convController.deleteOneConversion)

module.exports = convRouter;