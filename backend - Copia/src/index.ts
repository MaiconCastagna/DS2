//aqui vai o "listen"

//1 coisa: criar conexão
import { createConnection, Connection } from 'typeorm';
import * as http from 'http';
import app from './app';

createConnection().then(connection => {

    const server = http.createServer(app);

    server.listen(3000, () => {
        console.log('Aplicação está rodando na porta 3000!');
    })

}).catch();