const connection = require("../config/connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, colOne, colTwo, valOne, valTwo, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += colOne.toString();
    queryString += ", "
    queryString += colTwo.toString();
    queryString += ") VALUES ( ?? ) ";
    
    console.log(queryString);

    connection.query(queryString, [valOne, valTwo], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },


  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};

module.exports = orm;
