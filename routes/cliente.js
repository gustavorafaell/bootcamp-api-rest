const { Router} = require("express"); // pega somente o recurso Router do express
const connection = require("../models")
const { criar, atualizar, remover } = require("../controllers/cliente");
const router = Router();

router.get("/:id?", (req, res) =>{ //? para deixar o parametro id opcional
    res.send("Listar cliente");
});
router.post("/", async(req, res) =>{ //ARROW Functions
    const result = await criar(req.body);
    res.send(result);
});
router.put("/:id", async(req, res) => { // parametro id obrigatório
    const result = await atualizar(req.params.id, req.body);
    res.send(result);
});
router.delete("/:id", async(req, res) =>{ //ARROW Functions define uma funcao
    const result = await remover(req.params.id);
    res.send();
})

module.exports = router;