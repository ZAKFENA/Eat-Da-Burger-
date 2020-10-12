const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    create: function(colOne, colTwo, cb) {
        orm.create("cats", colOne, colTwo, function(res) {
          cb(res);
        });
      },


    // update: function(objColVals, condition, cb) {
    //     orm.update("burgers", objColVals, condition, function(res) {
    //       cb(res);
    //     });
    //   },
};

module.exports = burger;
