var express = require("express");
var router = express.Router();

var painelController = require("../controllers/painelController");

router.get("/listar", function (req, res) {
    painelController.listar(req, res);
});

module.exports = router;