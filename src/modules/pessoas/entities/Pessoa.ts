import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("pessoa")
class Pessoa {

    @PrimaryColumn()
    id: string; 

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    cnpj: string;

    @Column()
    telefone: string;

    @Column()
    data_nascimento: Date;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: string;

}

export { Pessoa };