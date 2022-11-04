const express = require("express");
const router = express.Router();

router.get("/:id?", function(req, res){
    res.send("Listar clientes");
});
router.post("/", function (req, res){
    res.send("Criar cliente");
});
router.put("/:id", function (req, res) {
    res.send("Atualização de clientes");
});
router.delete("/:id", function (req, res){
    res.send("Excluir cliente");
})

module.exports = router;