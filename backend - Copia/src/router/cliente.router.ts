import { Router } from 'express';
import clienteController from '../controller/cliente.controller';//Está sem chaves pois fará um import
//de uma instância

class ClienteRouter {
    public router: Router;

    // Chama ao instanciar classe
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', clienteController.find);
        this.router.post('/', clienteController.create);
    }
}
export default new ClienteRouter().router;


