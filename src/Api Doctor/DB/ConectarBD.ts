
const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "postgres", 
    password: "171215", 
    host: "localhost",
    port: 5432, 
    database: "ShortPaper2"
});

module.exports = pool;