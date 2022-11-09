const { Router } = require("express");
const router = Router();

router.get("/:id?", (req, res) =>{ 
    res.send("Listar pedido");
});
router.post("/", (req, res) =>{
    res.send("Criar pedido");
});
router.put("/:id", (req, res) =>{
    res.send("Atualizar pedido");
});
router.delete("/:id", (req, res) =>{
    res.send("Excluir pedido");
})

module.exports = router;