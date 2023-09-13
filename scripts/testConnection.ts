import pool from "../src/db/db";

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conexão com o banco de dados estabelecida com sucesso");
    console.log("Hora atual do banco de dados:", res.rows[0].now);
  }
  pool.end();
});
