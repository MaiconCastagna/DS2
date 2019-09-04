const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./routes');
const connection = require('./mysql-connection');


const app = express();

app.use(bodyParser.json());

app.use(Router);

// Tenta conectar com o bd
connection.connect((error) => {
    if (error) {
        console.error('Deu erro em: %s', error.message);
        return;
    }

    const appServer = app.listen(3000, () => {
        console.log('Aplicação está rodando na porta %s', appServer.address().port)
    });    

});