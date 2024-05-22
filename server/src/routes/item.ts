export {}; // Needed otherwise transpiler will complain about 'cannot redeclare variable'
const express = require("express");
const router = express.Router();
// const { checkAuthenticated } = require('../middleware/authentication');
const itemController = require("../controllers/item");

router.get("/get", itemController.get);

module.exports = router;
