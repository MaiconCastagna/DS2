import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { ClienteEntity } from '../entity/cliente.entity';

class ClienteController {

    public async find(req: Request, res: Response) {


        try {
            const clientes = await getRepository(ClienteEntity).find();
            res.send(clientes);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async create(req: Request, res: Response) {
        const cliente = req.body;

        try {
            await getRepository(ClienteEntity).save(cliente);
            res.send(cliente);
        } catch (error) {
            res.status(500).send(error + 'Teste Create Error');
        }
    }
}

export default new ClienteController();
//já exporta instanciado =
//"const clienteController = new ClienteController();"