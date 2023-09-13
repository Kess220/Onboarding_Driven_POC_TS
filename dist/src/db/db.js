"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionString = "postgresql://postgres:paodecarne@localhost:5432/poc_db";
const pool = new pg_1.Pool({
    connectionString: connectionString,
});
exports.default = pool;
