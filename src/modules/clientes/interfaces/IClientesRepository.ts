import { ICreateClienteDTO } from "../dto/ICreateClienteDTO";
import { Cliente } from "../models/Cliente";

interface IClientesRepository {

    create(data: ICreateClienteDTO): void;

    findByCpf(cpf: string): Cliente;

    findByCnpj(cnpj: string): Cliente;

    findByUsuario(usuario: string): Cliente;

    listaClientes(): Cliente[];

}

export { IClientesRepository };