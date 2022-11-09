const { Router} = require("express"); // pega somente o recurso Router do express
const router = Router();

router.get("/:id?", (req, res) =>{ //? para deixar o parametro id opcional
    res.send("Listar cliente");
});
router.post("/", (req, res) =>{ //ARROW Functions
    res.send("Criar cliente");
});
router.put("/:id", (req, res) => { // parametro id obrigatório
    res.send("Atualizar cliente");
});
router.delete("/:id", (req, res) =>{ //ARROW Functions define uma funcao
    res.send("Excluir cliente");
})

module.exports = router;