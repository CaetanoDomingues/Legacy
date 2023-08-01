var express = require("express");
var router = express.Router();

var registroController = require("../controller/registroController");

router.post("/registrar/:idUsuario", function (req, res) {
    registroController.enviar(req, res);
})

router.get("/capturar/:idUsuario", function (req,res){
    registroController.capturar(req,res);
})

// router.get("/atualizar/:idUsuario", function (req,res){
//     registroController.atualizar(req,res);
// })
module.exports = router;