import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class pessoa1665619209258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pessoa",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                    },
                    {
                        name: "data_nascimento",
                        type: "timestamp",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoa");
    }

}
