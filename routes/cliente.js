const { Router} = require("express"); // pega somente o recurso Router do express
//const connection = require("../models");
const { criar, atualizar, remover, buscar } = require("../controllers/cliente");
const router = Router();
const verifyToken = require("../middlewares/auth");

router.get("/:id?", verifyToken, async(req, res) =>{ //? para deixar o parametro id opcional /adicionado verifytoken
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
router.put("/:id", verifyToken, async(req, res) => { // parametro id obrigatório
    try {
        await atualizar(req.params.id, req.body);
        const result = await buscar(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500).send({mensagem: error.message});
    }
});
router.delete("/:id", verifyToken, async(req, res) =>{ //ARROW Functions define uma funcao
    try {
        const result = await remover(req.params.id);
        res.send();
    } catch (error) {
        res.status(500).send({mensagem: error.message});
    }
});

module.exports = router;