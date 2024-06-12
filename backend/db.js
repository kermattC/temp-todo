const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "ayylmao123",
    host: "db",
    port: "5432",
    database: "perntodo"
})

// const pool = new Pool({
//     user: "my_app_role",
//     password: "some_password",
//     host: "localhost",
//     post: 5432,
//     database: "perntodo"
// })
// this basically follows the database url format 
// postgresql://<user>:<password>@localhost:5432/<database> 
// DB_URL='postgresql://my_app_role:some_password@localhost:5432/perntodo'

module.exports = pool;