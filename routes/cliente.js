const express = require("express");
const router = express.Router();

router.get("/:id?", function(req, res){ //? para deixar o parametro id opcional
    res.send("Listar cliente");
});
router.post("/", function (req, res){
    res.send("Criar cliente");
});
router.put("/:id", function (req, res) { // parametro id obrigatório
    res.send("Atualizar cliente");
});
router.delete("/:id", function (req, res){
    res.send("Excluir cliente");
})

module.exports = router;