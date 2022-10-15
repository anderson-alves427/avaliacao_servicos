"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_routes_1 = require("./routes/clientes.routes");
const pessoas_routes_1 = require("./routes/pessoas.routes");
require("./database/ormconfig");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/pessoas", pessoas_routes_1.pessoasRoutes);
app.use("/clientes", clientes_routes_1.clientesRoutes);
app.listen(8080);
