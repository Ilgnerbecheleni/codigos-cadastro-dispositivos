import net from 'net';


function enviarComando(ip, comando) {
    const port = 80;

    return new Promise((resolve, reject) => {
        const client = net.createConnection({ host: ip, port }, () => {
            client.write(comando);
        });

        client.on('data', (data) => {
            resolve(data.toString());
            client.end();
        });

        client.on('error', (error) => {
            reject(new Error(`Erro de conexão: ${error.message}`));
        });

        client.on('end', () => {
            console.log('Conexão encerrada');
        });
    });
}


export default enviarComando;