const { Router} = require("express"); // pega somente o recurso Router do express
const connection = require("../models");
const { criar, atualizar, remover, buscar } = require("../controllers/cliente");
const router = Router();

router.get("/:id?", async(req, res) =>{ //? para deixar o parametro id opcional
    try {
        const result = await buscar(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500).send({mensagem: error.message});
    }
});
router.post("/", async(req, res) =>{ //ARROW Functions
    try {
        const result = await criar(req.body);
        res.send(result);        
    } catch (error) {
        res.status(500).send({mensagem: error.message});
    }
});
router.put("/:id", async(req, res) => { // parametro id obrigatório
    try {
        await atualizar(req.params.id, req.body);
        const result = await buscar(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500).send({mensagem: error.message});
    }
});
router.delete("/:id", async(req, res) =>{ //ARROW Functions define uma funcao
    try {
        const result = await remover(req.params.id);
        res.send();
    } catch (error) {
        res.status(500).send({mensagem: error.message});
    }
});

module.exports = router;