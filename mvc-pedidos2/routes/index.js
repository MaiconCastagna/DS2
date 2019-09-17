const express = require('express');
const clienteRoute = require('./cliente.router');
const produtoRoute = require('./produto.router');
const vendedorRoute = require('./vendedor.router');
const pedidoRoute = require('./pedido.router');
const routes = new express.Router();

routes.use('/cliente', clienteRoute);
routes.use('/produto', produtoRoute);
routes.use('/vendedor', vendedorRoute);
routes.use('/pedido', pedidoRoute);

module.exports = routes;