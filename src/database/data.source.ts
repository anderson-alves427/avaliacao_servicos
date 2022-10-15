import "reflect-metadata"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "1234",
    database: "servico_avaliacao",
    entities: [],
    synchronize: false,
    logging: false,
    migrations: ["./src/database/migrations/**/*.ts"],
    migrationsTableName: "migrations",
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        console.log("Banco conectado com sucesso!")
    })
    .catch((error) => console.log(error))