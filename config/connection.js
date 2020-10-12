
var mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8000,

  // Your username
  user: "userz",

  // Your password
  password: "zuser12",
  database: "burgers_db",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
