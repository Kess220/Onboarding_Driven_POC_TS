"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../src/db/db"));
db_1.default.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
    }
    else {
        console.log("Conexão com o banco de dados estabelecida com sucesso");
        console.log("Hora atual do banco de dados:", res.rows[0].now);
    }
    db_1.default.end();
});
