import enviarComando from "../utils/enviarComando.js";

export const enviarComandoController = async (req, res) => {
    try {
        const ip = req.query.ip;
        const action = req.query.action;

        if (!ip) {
            return res.status(400).send('IP é obrigatório');
        }

        if (!action) {
            return res.status(400).send('Ação é obrigatória');
        }

        let acionamento;
        if (action === 'ligar') {
            acionamento = 'A';
        } else if (action === 'desligar') {
            acionamento = 'a';
        } else {
            return res.status(400).send('Comando inválido, envie "ligar" ou "desligar"');
        }

        const result = await enviarComando(ip, acionamento);
        res.send(result);
    } catch (error) {
        res.status(500).send(`Erro: ${error.message}`);
    }
}

export const verificarDispositivo = async (req,res)=>{
    try {
        const ip = req.query.ip;
        

        if (!ip) {
            return res.status(400).send('IP é obrigatório');
        }

        const statusComando = 'status';
        const result = await enviarComando(ip , statusComando);
        res.send(result);

    } catch (error) {
        res.status(500).send(`Erro: ${error.message}`);
    }
}

export default {enviarComando , verificarDispositivo}