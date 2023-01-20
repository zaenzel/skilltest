const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/product", (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (error, result) => {
    if (error) throw error;
    response(200, "ini data", result, res);
  });
});

app.get("/product/:name", (req, res) => {
  const name = req.params.name;
  const sql = `SELECT * FROM product WHERE name = ${name}`;
  db.query(sql, (error, result) => {
    if (error) throw error;
    response(200, "ini data", result, res);
  });
});

app.post("/product", (req, res) => {
  const { name, price, picture } = req.body;
  const sql = `INSERT INTO product (name, price, picture) VALUES ('${name}','${price}','${picture}')`;

  db.query(sql, (error, result) => {
    if (error) response(500, "invalid", "error", res);
    const data = {
      isSuccess: result.affectedRows,
      id: result.insertId,
    };
    if (result?.affectedRows) {
      response(200, "data berhasil ditambahkan", data, res);
    }
  });
});

app.put("/product/:id", (req, res) => {
  const id = req.params.id;
  const { name, price, picture } = req.body;
  const sql = `UPDATE product SET name = '${name}', price = '${price}', picture = '${picture}' WHERE id = ${id} `;

  db.query(sql, (error, result) => {
    if (error) response(500, "invalid", "error", res);
    if (result?.affectedRows) {
      const data = {
        isSuccess: result.affectedRows,
        message: result.message,
      };
      response(200, "data berhasil diupdate", data, res);
    } else {
      response(500, "product tidak di temukan", "error", res);
    }
  });
});

app.delete("/product/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM product WHERE id = ${id} `;

  db.query(sql, (error, result) => {
    if (error) response(500, "invalid", "error", res);
    if (result?.affectedRows) {
      const data = {
        isSuccess: result.affectedRows,
        message: result.message,
      };
      response(200, "data berhasil dihapus", data, res);
    } else {
      response(500, "product tidak di temukan", "error", res);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
