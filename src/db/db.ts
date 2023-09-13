import { Pool } from "pg";

const connectionString =
  "postgresql://postgres:paodecarne@localhost:5432/poc_db";

const pool = new Pool({
  connectionString: connectionString,
});

export default pool;

