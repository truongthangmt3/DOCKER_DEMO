var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  var mysql = require("mysql");
  var connection = mysql.createConnection({
    host: "0.0.0.0",
    user: "root",
    port: 5555,
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
