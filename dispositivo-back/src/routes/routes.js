import express from 'express';
import { atualizarDispositivo, criarDispositivo, deletarDispositivo, listarDispositivos } from '../controllers/dispositivoController.js';
import { enviarComandoController, verificarDispositivo } from '../controllers/comandoController.js';


const router = express.Router();

router.get('/dispositivos', listarDispositivos);
router.get('/comando', enviarComandoController);
router.get('/status', verificarDispositivo);
router.get('/dispositivos/:id', listarDispositivos);
router.post('/disposittivos',criarDispositivo);
router.put('/dispositivos', atualizarDispositivo);
router.delete('/dispositivos',deletarDispositivo);




export default router