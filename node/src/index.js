const mysql = require("mysql2/promise");
const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

app.get("/", async (req, res) => {
  try {
    const pool = await mysql.createPool(config);
    const fakeName = faker.person.firstName();

    await pool.query("INSERT INTO people (name) VALUES (?)", [fakeName]);
    const [rows] = await pool.query("SELECT name FROM people ORDER BY name");

    res.status(200).send({ message: "<h1>Full Cycle Rocks!</h1>", data: rows });
    await pool.end();
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
