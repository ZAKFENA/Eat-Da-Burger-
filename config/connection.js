var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

};
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "userz",
  password: "zuser12",
  database: "burgers_db",
});

var PORT = process.env.PORT || 3306;

connection.connect();

module.exports = connection;