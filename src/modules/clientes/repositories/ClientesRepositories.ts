import { ICreateClienteDTO } from "../dto/ICreateClienteDTO";
import { IClientesRepository } from "../interfaces/IClientesRepository";
import { Cliente } from "../models/Cliente";

class ClienteRepository implements IClientesRepository {
    private clientes: Cliente[];

    constructor() {
        this.clientes = [];
    }
    listaClientes(): Cliente[] {
        return this.clientes;
    }

    findByCpf(cpf: string): Cliente {
        const cliente = this.clientes.find( cliente => cliente.cpf === cpf);
        return cliente;
    }

    findByCnpj(cnpj: string): Cliente {
        const cliente = this.clientes.find( cliente => cliente.cnpj === cnpj);
        return cliente;
    }

    findByUsuario(usuario: string): Cliente {
        const cliente = this.clientes.find( cliente => cliente.usuario === usuario);
        return cliente;
    }

    create({ cpf, cnpj, email, telefone, usuario, senha, pessoa_id }: ICreateClienteDTO): void {
        const cliente = new Cliente();

        Object.assign(cliente, {cpf, cnpj, email, telefone, usuario, senha, pessoa_id});

        this.clientes.push(cliente);
    }

}

export { ClienteRepository };