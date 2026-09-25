const express = require('express');
const router = express.Router();

const { cadastrar, listar, deletar } = require('../controllers/livroController');
const auth = require('../middlewares/auth');
const permitir = require('../middlewares/checkRoler');

router.post('/livros', auth, cadastrar);
router.get('/livros', auth, listar);
router.delete('/livros/:id' , auth , permitir('administrador'), deletar);

module.exports = router;
