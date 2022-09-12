import { ICreateClienteDTO } from "../dto/ICreateClienteDTO";
import { IClientesRepository } from "../interfaces/IClientesRepository";

class ClienteService {
    constructor( private clienteRepository: IClientesRepository) {}

    createCliente(data: ICreateClienteDTO) {
        const cpfExiste = this.clienteRepository.findByCpf(data.cpf);

        if ( cpfExiste ) {
            throw new Error("Cpf já cadastrado!");
        }

        const cnpjExiste = this.clienteRepository.findByCpf(data.cnpj);

        if ( cnpjExiste ) {
            throw new Error("Cnpj já cadastrado!");
        }

        const usuarioExiste = this.clienteRepository.findByCpf(data.usuario);

        if ( usuarioExiste ) {
            throw new Error("Usuário já cadastrado!");
        }

        this.clienteRepository.create(data);
    }

    listaCliente() {
        return this.clienteRepository.listaClientes();
    }
}

export { ClienteService };