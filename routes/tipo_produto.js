const { Router } = require("express");
const router = Router();
const {
  buscarTodos,
  buscarPorId,
  criar,
  atualizar,
  remover,
} = require("../controllers/basic");
const { tipo_produto } = require("../models");

router.get("/:id?", async (req, res) => {
  try {
    let result = req.params.id
      ? await buscarPorId(tipo_produto, req.params.id)
      : await buscarTodos(tipo_produto);
  
    res.send(result);
  } catch (error) {
    res.status(500).send({mensagem: error.message});
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await criar(tipo_produto, req.body);
  
    res.send(result);
  } catch (error) {
    res.status(500).send({mensagem: error.message});
  }
});

router.put("/:id", async (req, res) => {
  try {
    await atualizar(tipo_produto, req.params.id, req.body);
    const result = await buscarPorId(tipo_produto, req.params.id);
  
    res.send(result);
  } catch (error) {
    res.status(500).send({mensagem: error.message});
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await remover(tipo_produto, req.params.id);
  
    res.send();
  } catch (error) {
    res.status(500).send({mensagem: error.message});
  }
});

module.exports = router;
/*
const { Router } = require("express");
const { criar, atualizar, remover, buscar } = require("../controllers/tipo_produto");
const router = Router();

router.post("/", async(req, res) =>{
    const result = await criar(req.body);
    res.send(result);
});
router.put("/:id", async(req, res) => {
    await atualizar(req.params.id, req.body);
    const result = await buscar(req.params.id);
    res.send(result);
});
router.delete("/:id", async(req, res) =>{
    const result = await remover(req.params.id);
    res.send();
});
router.get("/:id?", async(req, res) =>{ 
    const result = await buscar(req.params.id);
    res.send(result);
});

module.exports = router;*/