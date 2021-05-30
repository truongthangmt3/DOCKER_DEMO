var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/login", function (req, res, next) {
  res.json({
    status: 1,
    msg: "Thành công",
    code: 200,
    data: {
      username: "thangnt",
    },
  });
});

module.exports = router;
