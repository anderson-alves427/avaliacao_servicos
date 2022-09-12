import { Router } from "express";
import { Pessoa } from "../modules/pessoas/model/Pessoa";

const pessoasRoutes = Router();

let pessoas: Pessoa[] = [];

pessoasRoutes.post("/", (request, response) => {
    const { nome, telefone, data_nascimento, email } = request.body;
    const paramsPessoas: Pessoa = {
        nome,
        telefone,
        data_nascimento,
        email
    }

    pessoas.push(paramsPessoas);

    return response.status(201).json({
        success: true,
        message: "Cadastro realizado com sucesso!",
        dados: paramsPessoas,
    });
    
});

export { pessoasRoutes };