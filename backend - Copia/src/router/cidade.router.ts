import { Router } from 'express';
import cidadeController from './../controller/cidade.controller';//Está sem chaves pois fará um import
//de uma instância

class CidadeRouter {
    public router: Router;

    // Chama ao instanciar classe
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', cidadeController.find);
        this.router.post('/', cidadeController.create);
    }
}
export default new CidadeRouter().router;


