var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "userz",

  // Your password
  password: "zuser12",
  database: "burgers_db",
});

connection.connect(function (err) {
  if (err) throw err;
});
