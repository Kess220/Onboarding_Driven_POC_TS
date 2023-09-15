import { Pool } from "pg";
import dotenv from "dotenv";

// Carregue as variáveis de ambiente do arquivo .env
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
