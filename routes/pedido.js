const express = require("express");
const router = express.Router();

router.get("/:id?", function(req, res){ 
    res.send("Listar pedido");
});
router.post("/", function (req, res){
    res.send("Criar pedido");
});
router.put("/:id", function (req, res) {
    res.send("Atualizar pedido");
});
router.delete("/:id", function (req, res){
    res.send("Excluir pedido");
})

module.exports = router;