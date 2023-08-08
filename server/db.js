const Pool = require('pg').Pool;

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PRPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
})

module.exports = pool;


