const express = require("express");

const detailsController=require("../controllers/details")

const router = express.Router();

router.get("/get/details",detailsController.getDetails );

router.post("/add/details",detailsController.postAddDetails );

router.delete("/delete/details/:id",detailsController.postDeleteDetails );

module.exports = router;
