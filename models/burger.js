const orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (vals, cb) {
    orm.insertOne("burgers", "burger_name", "devoured", vals, function (res) {
      cb(res);
    });
  },


  update: function (val, condition, cb) {
    orm.update("burgers", val, condition, function (res) {
      cb(res);
    });
  },

  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
