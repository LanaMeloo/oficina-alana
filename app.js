const express = require('express');
const sequelize = require('./src/config/database');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const authRoutes = require('./src/routes/authRoutes');
const livroRoutes = require('./src/routes/livroRoutes');
const movimentacaoRoutes = require('./src/routes/movimentacaoRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(usuarioRoutes);
app.use(authRoutes);
app.use(livroRoutes);
app.use(movimentacaoRoutes);

sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Erro ao conectar:', err));

sequelize.sync();

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

