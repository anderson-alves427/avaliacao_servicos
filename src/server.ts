import express from "express";
import { clientesRoutes } from "./routes/clientes.routes";
import { pessoasRoutes } from "./routes/pessoas.routes";

import "./database";

const app = express();
app.use(express.json());

app.use("/pessoas", pessoasRoutes);
app.use("/clientes", clientesRoutes);

app.listen(8080);