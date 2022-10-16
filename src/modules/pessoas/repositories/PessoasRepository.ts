import { Pessoa } from "../entities/Pessoa";

class PessoasRepository {
    private pessoas: Pessoa[];

    constructor() {
        this.pessoas = []
    }

    create(data: PessoaDTO): void {

    }
}

export { PessoasRepository };