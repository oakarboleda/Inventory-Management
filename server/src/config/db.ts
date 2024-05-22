const { Client } = require("pg");

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
client
  .connect()
  .then(() =>
    console.log(
      `Connected to PostgreSQL database on port ${process.env.PGPORT}...`
    )
  )
  .catch((err: any) => console.log(err));

module.exports = client;

// client
//     .query(query)
//     .then(res => {
//         console.log('Table is successfully created');
//     })
//     .catch(err => {
//         console.error(err);
//     })
//     .finally(() => {
//         client.end();
//     });
