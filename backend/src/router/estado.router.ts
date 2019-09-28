import { Router } from 'express';
import estadoController from './../controller/estado.controller';

class EstadoRouter {
    public router: Router;

    // Chama ao instanciar classe
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', estadoController.find);
        this.router.post('/', estadoController.create);
    }
}
export default new EstadoRouter().router;


