var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  var mysql = require("mysql");
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
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
