const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});  


router.post("/api/burger", function(req, res) {
  
  burger.create([
      "name", "devoured"
    ], [
      req.body.name, false
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });

    
  });

  