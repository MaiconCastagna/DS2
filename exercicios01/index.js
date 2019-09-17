const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

consign().include('routes').into(app);

const appServer = app.listen(3000, () => {//para aparecer no console
    console.log('Aplicação está rodando! Na porta %s', appServer.address().port)
});    
