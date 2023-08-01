var express = require("express");
var router = express.Router();

var usuarioController = require("../controller/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
})

router.post("/guardar/:id", function (req, res) {
    usuarioController.guardar(req, res);
})
module.exports = router;