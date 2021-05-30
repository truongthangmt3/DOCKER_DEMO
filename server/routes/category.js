var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  var mysql = require("mysql");
  const hostDemo = "db_demo";
  var connection = mysql.createConnection({
    host: hostDemo,
    user: "root",
    port: 3306,
    password: "123456Aa@",
    database: "tacn",
  });
  connection.connect();

  connection.query("select * from user", function (error, results, fields) {
    if (error) throw error;
    res.json({
      status: 1,
      msg: "Thành công",
      code: 200,
      data: results,
    });
  });

  connection.end();
});

module.exports = router;
