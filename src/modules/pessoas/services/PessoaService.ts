import { PessoasRepository } from "../repositories/PessoasRepository";

class PessoaService {
    constructor(private pessoasRepository: PessoasRepository) {}

    createPessoa () {
        console.log("teste");
    }
}