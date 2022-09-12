import { response, Router } from "express";
import { ClienteRepository } from "../modules/clientes/repositories/ClientesRepositories";
import { ClienteService } from "../modules/clientes/services/ClientesServices";

const clientesRoutes = Router();

const clientesRepository = new ClienteRepository();

clientesRoutes.post("/", (request, response) => {
    const cliente = request.body;
    const clienteService = new ClienteService(clientesRepository);

    clienteService.createCliente(cliente);

    return response.status(201).send();

});

clientesRoutes.get("/", (request, response) => {
    const clienteService = new ClienteService(clientesRepository);

    const clientes = clienteService.listaCliente();
    return response.json(clientes);
});

export { clientesRoutes };