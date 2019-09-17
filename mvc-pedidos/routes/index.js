const express = require('express');
const clienteRouter = require('./cliente.router');
const vendedorRoutes = require('./vendedor.router');
const produtoRoutes = require('./produto.router');
const pedidoRoutes = require('./pedido.router');
const pedidoitemRoutes = require('./pedidoitem.router');
const routes = new express.Router();

routes.use('/cliente', clienteRouter);
routes.use('/vendedor', vendedorRoutes);
routes.use('/produto', produtoRoutes);
routes.use('/pedido', pedidoRoutes);
routes.use('/pedidoitem', pedidoitemRoutes);

module.exports = routes;