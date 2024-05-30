import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/routes.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const mongoUri = 'mongodb://localhost:27017/dispositivos';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Conectado com sucesso ao MongoDB');
    }).catch(error => {
        console.error('Erro ao conectar ao MongoDB:', error);
    });

app.use('/api', router); // Incluído o prefixo /api

app.listen(port, () => {
    console.log(`Servidor rodando no endereço: http://localhost:${port}`);
});
